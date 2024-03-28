import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Scroller from '../scroller';
import "./style.css"


function CategoriesList({
    list,
    onClick = () => { },
    citi
}) {
    const pathname = usePathname();
    return (
        <Scroller className="category-list">
            {list.map((link, i) => {
                return <li key={link.id} onClick={() => onClick("category", link.childs)}>
                    <Link className={pathname.split("/")[2] === link.alias ? "active":""}
                        href={`/${pathname.split("/")[1] || citi.toLowerCase()}/${link.alias}`}
                    >{link.title}</Link>
                </li>
            })}
        </Scroller>
    )
}

export default CategoriesList;
