import React from "react";
import "../HojasDeEstilo/BarraDeNavegacion.css"

function BarraDeNavegacion(){

  return(
    <nav className="container">
      <div className="text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="fw-bold text-white">Hi! i'm Nicolas Cuervo</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">A developer junior FrontEnd with experience in languajes like Html Css and JavaScript, in comming soon a experience in frameworks like react or angular.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-info btn-lg fw-bold">My proyects</button>
              <button type="button" className="btn btn-outline-info btn-lg fw-bold">KnowLedge</button>
              <button type="button" className="btn btn-outline-info btn-lg fw-bold">Social Networks</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BarraDeNavegacion