import React from "react";
import "../HojasDeEstilo/ProyectoEmblematico.css"

function ProyectoEmblematico (){

  return(
    <section className="container col-xxl-8 section-proyecto ">
      <div className="row align-items-center container ">
        <div className="col-lg-6 text-white">
          <h1 className="display-5 fw-bold lh-1 ">Mi proyecto mas emblematico</h1>
          <p className="lead">A mediados de octubre del 2022 tome la decisión de crear mi primer proyecto como un próximo programador FrontEnd, y vi la posibilidad de crear el boceto de una tienda web que realiza la venta de vestimenta para bebés, esto debido a que sabía que realizar este tipo de cosas como un primer proyecto me daría una vista más realista de los objetivos que se logran diariamente en un proyecto igual o mas de grande a este. Ademas me abriria las puertas a crear cosas mucho más complejas que esto.</p>
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Ver todos mis proyectos</button>
        </div>
        <div className="card col-6 mx-lg-auto ">
          <img src= {require("../Imagenes/Producto.png")} className="card-img-top img-producto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Esperanza Dress</h5>
            <p className="card-text">Si quieres ver este proyecto y ver como lo realice puedes verlo en mi repositorio de GitHub.</p>
            <a href="#" className="btn btn-primary">Ir al proyecto</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProyectoEmblematico