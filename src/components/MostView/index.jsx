import "./MostView.css"
import React, { useState, useEffect } from 'react';
import { KEY_END_POINT, fetchNotion } from "../../helpers/fetch";
import { ProductCard } from "../ProductCard";

export function MostView({repeatId}){
    const [most, setMost] = useState([])

    useEffect(() => {
        async function fetchDataCategory() {
            try {
                const data = await fetchNotion(KEY_END_POINT.KEY_COMPRADOS, true)
                let result = data.filter(item => item.id != repeatId)
                setMost(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataCategory()
    }, [])

    return (
        <section className="mostview" >
            <h2>Mas vistos</h2>
            <div className="category__container">
            {most.map((producto)=> <ProductCard key={producto.id} producto={producto} /> )}
            </div>
        </section>
    )
}