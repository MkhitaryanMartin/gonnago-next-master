"use client"

import React from "react";
import MyDrower from "../../Drawer";
import BottomDrawer from "./bottom-drower";
import SearchDrawer from "./search-drawer";
import SearchIcon from "../../svg/search";
import MenuIcon from "../../menuIcon";
import CursorDown from "../../svg/cursor-down";
import Button from "../../button";
import Menu from "../menu";



function MenuDrawer({
    isOpen,
    activeValue,
    handleGetValue,
    handleIsOpen,
    citiList
}) {

    return (
       <>
        <MyDrower open={isOpen.isOpenMenu} onClose={handleIsOpen} name="isOpenMenu">
            <div className="drow-head drow-head_none">
                <SearchIcon onClick={() => handleIsOpen("isOpenSearchDrower")} />
                <MenuIcon className={isOpen.isOpenMenu ? "menu-icon_show" : "menu-icon"} onClick={handleIsOpen} />
            </div>
            <div className="menu-lang__block">
                <p onClick={() => handleIsOpen("isOpenBottomDrower")}>{activeValue.lang} <span><CursorDown /></span></p>
                <div className="citi__block" onClick={() => handleIsOpen("isOpenCitiMenu")}>
                    <div>{activeValue.citi}</div>
                    <CursorDown />
                </div>
                <Button text="Մուտք" className="header__button" />
            </div>
            <Menu citiList={citiList} handleGetValue={handleGetValue} handleIsOpen={handleIsOpen}/>
            <SearchDrawer handleIsOpen={handleIsOpen} isOpen={isOpen.isOpenSearchDrower} />
          
        </MyDrower>
          <BottomDrawer
          handleGetValue={handleGetValue}
          handleIsOpen={handleIsOpen}
          lang={activeValue.lang}
          isOpen={isOpen.isOpenBottomDrower}
      />
       </>
    )
}

export default MenuDrawer;