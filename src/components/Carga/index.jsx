import { useState } from "react";
import "./Carga.css";

export function Carga() {
  const [url, setUrl] = useState("")
  const [file, setFile] = useState({})
  async function handlePost(){
    const formData = new FormData();
    formData.append('image', file, file.name);
    try {
      let data = await fetch("https://obtencion-imagenes-back.vercel.app/", 
      {
      method: 'POST',
        body: formData
      });
          let json = await data.json()
    console.log(json)
    setUrl(json.url)
    } catch (error) {
      alert(error)
    }
   

  };

  return (
    <section>
      <form action="" className="carga">
        <input type="file" name="" id="" onChange={(e)=>setFile(e.target.files[0])}/>
        <input type="submit" value="Enviar" onClick={(e)=>{
          e.preventDefault();
          handlePost();
        }}/>
      </form>
      <div className="carga__container">
        <input type="text" name="" id="" className="carga__resultado" value={url} readOnly/>
      </div>
    </section>
  );
}
