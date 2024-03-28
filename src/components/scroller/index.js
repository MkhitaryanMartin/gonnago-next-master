import React, {useRef, useState}  from "react";

function Scroller({
   children,
   className
}){
    const categoryListRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
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
            <ul 
            className={className}
            ref={categoryListRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            >
                {children}
            </ul>
    )
}

export default Scroller