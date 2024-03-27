import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import "./style.css"


function CategoriesList({
   list,
    onClick=()=>{},
    citi
}){
    const categoryListRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const pathname = usePathname();
  
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - categoryListRef.current.offsetLeft);
        setScrollLeft(categoryListRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryListRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        categoryListRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <ul className="category-list"
            ref={categoryListRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {list.map((link,i)=>{
                return <li key={link.id} onClick={()=>onClick("category",link.childs)}>
                    <Link className={pathname.split("/")[2] === link.alias ? "active": pathname ==="/" && i ===0 ?"active":"" } 
                    href={`/${pathname.split("/")[1] || citi.toLowerCase()}/${link.alias}`}
                    
                    >{link.title}</Link>
                </li>
            })}
        </ul>
    )
}

export default CategoriesList;
