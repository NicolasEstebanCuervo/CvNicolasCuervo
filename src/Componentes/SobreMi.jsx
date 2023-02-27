import React from "react"
import "../HojasDeEstilo/SobreMi.css"

function SobreMi({titulo,descripcion}){

  return(
    <section className="row align-items-center g-5 py-5" >
    <div className="col-10 col-sm-8 col-lg-6 mx-auto">
      <img 
      className="d-block mx-lg-auto img-fluid" 
      src={require("../Imagenes/FotoPerfil.Jpg")} 
      alt="Bootstrap Themes" width="400" loading="lazy" />
    </div>
    <div className="col-lg-6 text-resposive">
      <h1 className="display-5 fw-bold lh-1 mb-3 text-white text-resposive">{titulo}</h1>
      <p className="lead text-white text-resposive">{descripcion}</p>
      <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold text-resposive">Ver mi perfil de GitHub</button>
    </div>
  </section>
  )
}

export default SobreMi