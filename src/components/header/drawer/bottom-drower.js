"use client"

import React from "react";
import MyDrower from "../../Drawer";
import OkIcon from "../../svg/ok";
import { langs } from "../../../assets/data";

function BottomDrawer({
    handleIsOpen,
    handleGetValue,
    isOpen,
    lang
}) {
    return (
                <MyDrower 
                open={isOpen} 
                placement="bottom" title="Language" 
                onClose={handleIsOpen} closable={true} 
                name="isOpenBottomDrower"
                >
                    <ul className="bottom__drower">
                        {langs.map((el) => {
                            return <li 
                            key={el.key}
                            onClick={() => handleGetValue("lang", el.label)}>
                                {el.label} {lang === el.label ? <OkIcon /> : ""} 
                            </li>
                        })}
                    </ul>
                </MyDrower>
    )
}

export default BottomDrawer;