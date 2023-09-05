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
                console.log(data[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataId()
    }, [])

    return(
        <section className="productPage" >
            <img src={dataId.img} alt="" />
            <div className="productPage__container">
                <h3>{dataId.nombre}</h3>
                <p>{dataId.desc}</p>
                <div className="producPage__medidas">
                
                </div>
            </div>
            <div className="productPage__container--mostview">
            <MostView/>
            </div>
        </section>
    )
}