import { useState } from "react";
import "./Carga.css";

export function Carga() {
  const [url, setUrl] = useState("")
  const [file, setFile] = useState({})
  const [message, setMessage] = useState(false)

  function handleMessage() {
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 1500);
  }
  function handleCopy(){
    try {
      navigator.clipboard.writeText(url)
      handleMessage()
    } catch (error) {
      console.error(error)
    }
  }

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
    setUrl(json.url)
    } catch (error) {
      alert(error)
    }
  };

  return (
    <section className="carga" >
      <div className={!message?"carga__message":"carga__message message__show"}><p>Copiado con exito</p> </div>
      <form action="" className="carga">
        <input type="file" name="" id="" className="carga__files" onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={(e)=>{
          e.preventDefault();
          handlePost();
        }}>Enviar</button>
      </form>
      <div className="carga__container">
        <input type="text" name="" id="" className="carga__resultado" value={url} readOnly/>
        <button onClick={handleCopy}>Copiar</button>
      </div>
    </section>
  );
}
