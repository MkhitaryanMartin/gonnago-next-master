"use client"

import React from "react";
import CategoriesList from "../../categories-list";
import CategoriesChildList from "../../categories-childs-list";



function Nav({
    list,
    handleGetValue,
    categories,
    activeValue
}) {
    return (
        <nav className="header__nav">
       {
        categories &&  <CategoriesList 
        list={categories} 
        styleMode={"list-category"} 
        onClick={handleGetValue} 
        citi={activeValue.citi}
        />
       }
      {
        list && <CategoriesChildList
         list={list} 
         styleMode={"list-event"}
         onClick={handleGetValue}
         genre={activeValue.genre}
         />
      }
    </nav>
    )
}

export default Nav;