import "./style.css"

function MenuIcon({
    className,
    onClick
}){
    return(
        <div className={`${className} menu-icon menui`} onClick={()=>onClick("isOpenMenu")}>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-tree"></div>
        </div>
    )
}

export default MenuIcon