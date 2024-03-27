import React from "react";
import "./style.css";
import SearchIcon from "../svg/search";


function SearchInput({
    type="text",
    placeholder="",
    onChange,
    className

}){
    return(
          <div className={`input__container ${className}`}>
        <SearchIcon/>
          <input type={type} placeholder={placeholder} onChange={onChange} className="input"/>
        </div>
    )
}

export default SearchInput;