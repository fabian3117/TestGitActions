//import React,{useState} from "react";


const Card = ({titulo, descripcion, repo}: {titulo: string, descripcion: string, repo: string}) => {
    //  const [hovered, setHovered] = useState(false);
      const EstiloElementos={
  margin:"1px auto",
      };
  return(
      <div style={EstiloElementos}>
  <section id="proyectos-realizados">
  
  <h2>{titulo}</h2>
  <p>{descripcion}</p>
  <button onClick={() => { window.location.href = repo.toString() }}>Ver repo</button>
  </section>
      </div>
  );
  };
  
  export default Card;