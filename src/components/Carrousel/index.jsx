import "./Carrousel.css"
import { Link } from "react-router-dom";

export function Carrousel({ categorias }) {
    return (
        <article className="carrousel" >
            <nav className="carrousel__nav">
                <ul className="carrousel__ul" > 
                    {categorias.map(({img, category})=>{
                        return(<li className="carrousel__li" key={Math.random()*2000}>
                            <Link to={"/"+category} className="carrousel__link">
                                <img src={img} alt={category} className="carrousel__img" />
                                <div className="carrousel__container">
                                    <h2 className="carrousel__title">{category}</h2>
                                </div>
                            </Link>
                        </li>)
        })}
                </ul>
            </nav>
        </article>
    )
}