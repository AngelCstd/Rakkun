import "./Carrousel.css"

export function Carrousel(){
    let nombre = "Collares"
    return(
        <nav className="carrousel__nav">
            <a href={nombre} className="carrousel__link">
                <img src="" alt={nombre} className="carrousel__img" />
                <div className="carrousel__container">
                    <h2 className="carrousel__title">{nombre}</h2>
                </div>
            </a>
        </nav>
    )
}