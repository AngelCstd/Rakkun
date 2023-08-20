import { Carrousel } from "../Carrousel"
import { MostView } from "../MostView"
import "./Inicio.css"


export function Inicio({categorias}){
    return(
        <section>
        <Carrousel categorias={categorias} />
        <MostView/>
        </section>
    )
}