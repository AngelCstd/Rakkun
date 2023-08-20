export const KEY_END_POINT = {
    KEY_ESPECIAL : "Especial",
    KEY_CATEGORIA: "Category",
    KEY_ID: "ID",
    KEY_COMPRADOS: "Comprados",
    KEY_ALL: ""
}

export const fetchNotion = async (key, value) =>{
    let data = await fetch(`https://obtencion-imagenes-back.vercel.app/notion?filterBy=${value}&key=${key}`)
    .then(res => res.json())
    let response = data.map(({properties})=>{
        let {ID, Agotado, Categoria, Descripcion,Especial, Imagen, Medidas, Nombre, Comprados } = properties
        return {
            id: ID.unique_id.number,
            nombre: Nombre.title[0].plain_text,
            desc: Descripcion.rich_text.length===0 ? "": Descripcion.rich_text[0].plain_text,
            img: Imagen.rich_text.length===0 ? "": Imagen.rich_text[0].plain_text,
            category: Categoria.select.name,
            medidas: Medidas.multi_select,
            especial: Especial.select?Especial.select.name : "",
            agotado: Agotado.checkbox,
            comprados: Comprados.checkbox
        }
    })
    return response
}