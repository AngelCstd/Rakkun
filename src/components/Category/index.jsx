import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { fetchNotion, KEY_END_POINT } from "../../helpers/fetch";
import { ProductCard } from "../ProductCard";
import "./Category.css"

export function Category() {
    const [productos, setProductos] = useState([])
    const parametros = useParams()

    useEffect(() => {
        async function fetchDataCategory() {
            try {
                const data = await fetchNotion(KEY_END_POINT.KEY_CATEGORIA, parametros.category)
                setProductos(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataCategory()
    }, [])
    return (
        <section className="category">
            <h2>{parametros.category}</h2>
            <div className="category__container">
            {productos.map((producto)=> <ProductCard producto={producto} /> )}
            
            
            </div>
        </section>
    )
}