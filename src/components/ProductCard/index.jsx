import "./ProductCard.css"
import { Link } from "react-router-dom";

export function ProductCard({producto}) {
    return(
        <div className="productCard">
        <Link  to={`/product/${producto.id}`}>
            <img src={producto.img} alt={producto.nombre} />
            <div className="productCard__container">
                <h3>{producto.nombre}</h3>
                <p>{producto.desc}</p>
            </div>
        </Link>
        </div>
    )
}