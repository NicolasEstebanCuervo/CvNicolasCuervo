import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraDeNavegacion from './Componentes/BarraDeNavegacion';
import SobreMi from './Componentes/SobreMi';
import Lenguaje from "./Componentes/Lenguajes"
import PieDePagina from "./Componentes/PieDePagina"
import ProyectoEmblematico from './Componentes/ProyectoEmblematico';

  // Parametros de la seccion sobre mi

const sobreMi = {
  titulo : ["Acerca de mi"],
  descripcion : [
    "¡Hola! Mi nombre es Nicolas Esteban Cuervo y soy aspirante a un programador junior FrontEnd, actualmente tengo 16 años, resido en Colombia y soy una persona totalmente amante a la programación. Actualmente tengo conocimientos en lenguajes de etiquetas como Html, tambien manejo lenguajes de estilos como lo es Css y estoy prospero a convertirme en un junior en JavaScript. Todos mis proyectos que he hecho los puedes ver en mi perfil personal de GitHub"
  ]

}

  // Parametros de la seccion lenguajes

const parametrosLenguaje = {

  lenguaje : ['Html','Css','JavaScript','React'],
  imagenes : ['Html','Css','Js','React'],
  descripciones: 
  [
    'Como sabemos Html es una de las herramientas mas importantes para el desarrollo web, es por eso que actualmente tengo un gran manejo de esta herramienta, posibilitandome todo tipo de oportunidades.',

    'Como sabemos Html es una de las herramientas mas importantes para el desarrollo web, es por eso que actualmente tengo un gran manejo de esta herramienta, posibilitandome todo tipo de oportunidades.',

    'Como sabemos Html es una de las herramientas mas importantes para el desarrollo web, es por eso que actualmente tengo un gran manejo de esta herramienta, posibilitandome todo tipo de oportunidades.',

    'Como sabemos Html es una de las herramientas mas importantes para el desarrollo web, es por eso que actualmente tengo un gran manejo de esta herramienta, posibilitandome todo tipo de oportunidades.'
  ]

}  

function App() {
  return (
    <div className="App container">
      {/* Barra de navegacion */}
      <BarraDeNavegacion />
        
      <hr style={{color:"white"}}></hr>

      {/* Sobre mi */}
      <SobreMi 
        titulo = {sobreMi.titulo}
        descripcion = {sobreMi.descripcion} 
      />

      <hr style={{color:"white"}}></hr>

      {/* Lenguajes de programacion y herramientas */}

      <h1 className='text-white g-5 py-5 texto-conocimientos'>Mis conocimientos</h1>
      
      <div className='contenedor-lenguajes'>
        <Lenguaje 
        imagen = {parametrosLenguaje.imagenes[0]}
        lenguaje = {parametrosLenguaje.lenguaje[0]}
        descripcion = {parametrosLenguaje.descripciones[0]}/> 
        <Lenguaje
        imagen = {parametrosLenguaje.imagenes[1]}
        lenguaje = {parametrosLenguaje.lenguaje[1]}
        descripcion = {parametrosLenguaje.descripciones[1]}/>
        <Lenguaje  
        imagen = {parametrosLenguaje.imagenes[2]}
        lenguaje = {parametrosLenguaje.lenguaje[2]}
        descripcion = {parametrosLenguaje.descripciones[2]}/>
        <Lenguaje  
        imagen = {parametrosLenguaje.imagenes[3]}
        lenguaje = {parametrosLenguaje.lenguaje[3]}
        descripcion = {parametrosLenguaje.descripciones[3]}/>
      </div>

      <hr style={{color:"white"}}></hr>

      {/* Proyecto mas emblematico */}

      <ProyectoEmblematico />

      <hr style={{color:"white"}}></hr>

      {/* Footer */}

      <PieDePagina />

    </div>
  );
}

export default App;
