import { useState } from "react"
import "./HeaderNav.css"

export const HeaderNav = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const handleVisible = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className="header">
            <h1>Rakuun</h1>
            <div className={menuVisible === false ? "header__menu" : "header__menu close__menu"} onClick={handleVisible}>
                <div className="menu__icon menu__hidden"></div>
                <div className={menuVisible === false ? "menu__icon" : "menu__icon close"}></div>
                <div className="menu__icon menu__hidden"></div>
            </div>
            <nav className={menuVisible === false ? "header__nav" : "nav__active header__nav"}>
                <ul className="header__ul" >
                    <li className="header__item--title">
                        <h1>Rakuun</h1>
                    </li>
                    <li className="header__item">
                        <a href="/collares">Collares</a>
                    </li>
                    <li className="header__item">
                        <a href="/pulseras">Pulseras</a>
                    </li>
                    <li className="header__item">
                        <a href="/anillos">Anillos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}