"use client"

import React from "react";
import Input from "../../search-input";
import OkIcon from "../../svg/ok";
import MenuList from "./menu-list";
import { cities } from "../../../assets/data";
import {useSelector } from "react-redux";
import "./style.css";

function Menu({
    citiList,
    handleGetValue,
    handleIsOpen
}) {

    const { isOpen, activeValue } = useSelector((state) => state.cities);
    return (
        <div 
        className={`menu__container ${isOpen.isOpenCitiMenu ? "show" : "hidden"}`} 
        onClick={() => handleIsOpen("isOpenCitiMenu")}
        >
            <div 
            className="menu" 
            onClick={(e) => e.stopPropagation()}
            >
                <div className="menu__header">
                    <h2>Город</h2>
                    <button 
                    className="menu__button" 
                    onClick={() => handleIsOpen("isOpenCitiMenu")}
                    >x</button>
                </div>
                <Input
                    type="search"
                    className="menu__search-icon"
                    placeholder="Поиск"
                    onChange={(e) => handleGetValue("searchCity", e.target.value)}
                />
                <div 
                onClick={(e) => handleGetValue("citi", e.target.textContent)} 
                className="citi-button__block"
                >
                    {
                        cities.map((citi) => (
                            <div 
                            key={citi}
                             className="citi-button"
                             >
                                {citi.toLowerCase() === activeValue.citi.toLowerCase() ? <span><OkIcon /></span> : <span />}{citi}
                            </div>
                        ))
                    }
                </div>
                <MenuList
                    activeCiti={activeValue.citi}
                    handleSetCiti={handleGetValue}
                    list={citiList.filter((citi) => {
                        if (activeValue.searchCity) {
                            return citi.alias.toUpperCase().includes(activeValue.searchCity.toUpperCase())
                        } else {
                            return true
                        }
                    })}
                />
            </div>
        </div>
    );
}

export default Menu;
