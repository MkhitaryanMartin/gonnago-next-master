import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Scroller from "../scroller";
import "./style.css"


function CategoriesChildList({
    list,
    onClick = () => {},
    genre
}) {
    const pathname = usePathname()
    return (

        <Scroller className="category-child-list">
            {list.map((link, i) => {
                return <li key={link.id} onClick={() => onClick("genre", link.alias)}>
                    <Link
                        href={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/${link.alias}`}
                        className={genre === link.alias ? "active" : ""}
                    >{link.title}</Link>
                </li>
            })}
        </Scroller>
    )
}

export default CategoriesChildList