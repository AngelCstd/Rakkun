import { useParams } from "react-router-dom"
import "./ProductPage.css"
import { KEY_END_POINT, fetchNotion } from "../../helpers/fetch"
import { useState, useEffect } from "react"
import { MostView } from "../MostView"

export function ProductPage() {
    const [dataId, setDataID] = useState([])
    const {id} = useParams()
    useEffect(() => {
        async function fetchDataId() {
            try {
                const data = await fetchNotion(KEY_END_POINT.KEY_ID , id)
                setDataID(data[0])
            } catch (error) {
                console.log(error)
            }
        } 
        fetchDataId()
    }, [id])

    return(
        <section className="productPage" >
            <img src={dataId.img} alt="" className="productPage__img" />
            <div className="productPage__container">
                <h3>{dataId.nombre}</h3>
                <p>{dataId.desc}</p>
                <div className="producPage__medidas">
                
                </div>
            </div>
            <MostView repeatId={id} />
        </section>
    )
}