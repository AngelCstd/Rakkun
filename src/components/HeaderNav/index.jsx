import { useState } from "react"
import { Link } from "react-router-dom";
import "./HeaderNav.css"

export const HeaderNav = ({categorias}) => {
    const [menuVisible, setMenuVisible] = useState(false)

    const handleVisible = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className="header">
            <Link className="header__title" to="/">
            <h1>Rakuun</h1>
            </Link>
            <div className={menuVisible === false ? "header__menu" : "header__menu close__menu"} onClick={handleVisible}>
                <div className="menu__icon menu__hidden"></div>
                <div className={menuVisible === false ? "menu__icon" : "menu__icon close"}></div>
                <div className="menu__icon menu__hidden"></div>
            </div>
            <nav onClick={handleVisible} className={menuVisible === false ? "header__nav" : "nav__active header__nav"}>
                <ul className="header__ul" >
                    <li className="header__item--title">
                        <h1>Rakuun</h1>
                    </li>
                    {categorias.map(({category})=>{
                        return(<li key={Math.random()*1000} className="header__item" onClick={handleVisible}>
                        <Link to={"/" + category}>{category}</Link>
                    </li>)
                    })}
                </ul>
            </nav>
        </header>
    )
}