import "./HeaderNav.css"

export const HeaderNav = () => {
    
    return(
        <header className="header">
            <nav className="header__nav">
                <h1>rakuun</h1>
                <p>menu</p>
                <ul className="header__ul">
                    <li className="header__item"><a href="/collares"></a> Collares</li>
                    <li className="header__item"><a href="/pulseras"></a> Pulseras</li>
                    <li className="header__item"><a href="/anillos"></a> Anillos</li>
                </ul>
            </nav>
        </header>
    )
}