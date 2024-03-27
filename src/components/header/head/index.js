"use client"

import React from "react";
import Link from "next/link";
import logo from "../../../assets/img/logo.png"
import CursorDown from "../../svg/cursor-down";
import Button from "../../button";
import SearchIcon from "../../svg/search";
import Menu from "../menu";
import MenuIcon from "../../menuIcon";
import DropdownLang from "../../DropDown";
import SearchInput from "../../search-input";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Head({
    isOpen,
    activeValue,
    handleGetValue,
    handleIsOpen, 
    citiList
}) {
const pathname = usePathname()
  return (
        <header className="header" >
            <div className="header__head-block">
                <div className="header__logo-block">
                    <Link href={`/${activeValue.citi.toLowerCase()}/entertainment`}><Image src={logo} alt="logo"/></Link>
                    <div className="header__filter-block" onClick={()=>handleIsOpen("isOpenCitiMenu")}>
                        <p className="spann">{pathname.split("/")[1] || activeValue.citi }</p>
                        <CursorDown />
                    </div>
                </div>
                <SearchInput type="search" placeholder="Կինո" className="header__input" />
                <div className="header__lang-select">
                    <DropdownLang value={activeValue.lang} handleSetLang={handleGetValue} />
                    <Button text="Մուտք" className="header__button" />
                </div>

                <div className="header-icon_block">
                    <SearchIcon className="searchIcon" />
                    <MenuIcon className={isOpen.isOpenMenu ? "menu-icon_show" : "menu-icon"} onClick={handleIsOpen} />
                </div>
                <Menu  citiList={citiList} handleGetValue={handleGetValue} handleIsOpen={handleIsOpen}/>
            </div>
        </header>
    )
}

export default Head;