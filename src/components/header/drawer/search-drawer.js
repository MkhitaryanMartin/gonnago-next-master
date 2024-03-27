"use client"

import React  from "react";
import MyDrower from "../../Drawer";
import SearchInput from "../../search-input";


function SearchDrawer({
    handleIsOpen,
    isOpen
}) {

    return (
                    <MyDrower 
                    open={isOpen} 
                    placement="bottom" 
                    height="100%" 
                    title={"Search"} 
                    onClose={handleIsOpen} 
                    closable={true} 
                    name="isOpenSearchDrower"
                    >
                        <div className="search-deawer"><SearchInput placeholder="Որոնում" /></div>
                    </MyDrower>
     
    )
}

export default SearchDrawer;