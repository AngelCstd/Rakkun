import { Carrousel } from "../Carrousel"
import { MostView } from "../MostView"
import "./Inicio.css"


export function Inicio({categorias}){
    return(
        <section className="main__section">
        <Carrousel categorias={categorias} />
        <MostView/>
        </section>
    )
}