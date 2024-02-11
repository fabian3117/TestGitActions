import {useState} from "react";
import { FaLinkedin,FaGithub,FaMailBulk,FaTablet,FaDigitalTachograph } from "react-icons/fa";
const Contacto=()=>{
    const [hovered, setHovered] = useState(false);
    let estilos = {
        marginTop:"revert",
        padding: "1.5px",
        willChange: "filter",
        transition: "filter 10ms",
        filter: hovered
        ? "drop-shadow(0 0 1em #7E228A)"
        : "drop-shadow(0 0 1em #0B80A3)",
      };
      let EstilosContenedor={
        display:"flex",

      };
return(
<div>
    <section id="contacto">
    <h1
        style={estilos}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        Contacto
      </h1>
      <br/>
        <p>Si desea contactarme puede hacerlo mediante:</p>
        <div style={EstilosContenedor}></div>
        <ul>
            <p></p>
            <p><a href="https://www.linkedin.com/in/fabian3117/"><FaLinkedin/>Linkedin</a></p>
            <p><a href="https://www.github.com/fabian3117/"><FaGithub/>Github</a></p>
            <p><a href="mailto:fabian3117@frba.utn.edu.ar"><FaMailBulk/>Correo</a></p>
            <p><a href="tel:+5411323981056"><FaTablet/>Telefono</a></p>
            <p><a href="https://drive.google.com/file/d/1ItuS7xsH4XOTTcTX_W_qYti7_WEf2AtA/edit"><FaDigitalTachograph/>CV</a></p>
        </ul>
        </section>
</div>

);
};
export default Contacto;