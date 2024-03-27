"use client "

import React from "react";
import OkIcon from "../../svg/ok";

function MenuList({
    activeCiti,
    handleSetCiti,
    list

}){
    return (
        <ul className="menu__citi-list">
                    {list.map((city, i) => {
                        const isFirstOfLetter = i === 0 || city.alias[0] !== list[i - 1]?.alias[0];
                        return (
                            <React.Fragment key={city.title + city.id}>
                                {isFirstOfLetter && (
                                    <li className="menu__citi-list-title" key={city.title}>
                                        <h3>{city.alias[0].toUpperCase()}</h3>
                                    </li>
                                )}
                                <li className="menu__citi" key={city.id} onClick={() => handleSetCiti("citi",city.alias)}>
                                    {city.alias.toUpperCase()}
                                    <span>{city.alias.toUpperCase() === activeCiti.toUpperCase() ? <OkIcon /> : ""}</span>
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
    )
}


export default MenuList