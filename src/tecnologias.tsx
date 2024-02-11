import { useState } from "react";
const Tecnologias=({tecnolog}: {tecnolog: string[]})=>{
    const [hovered, setHovered] = useState(false);
    let estilos = {
        height: "6px",
        padding: "1.5px",
        willChange: "filter",
        transition: "filter 100ms",
        filter: hovered
          ? "drop-shadow(0 0 2em #310D87)"
          : "drop-shadow(0 1px 2em #F9468A)",
      };
      let estilosTry={
        display: "grid",
        border: "2px solid rgb(125 58 225)",
        gridTemplateColumns: "repeat(4, 1fr)",
        padding: "5px",
        width:"fit-content",
        willChange: "filter",
        boxShadow: "rgba(87, 29, 169, 1) 1px 5px 10px",
        transition: "filter 100ms",
        TextAlign:"center",
        gap: "10px",
        minWidth:"250px",
        margin:"auto",
        borderRadius:"20px",
        filter: hovered
          ? "drop-shadow(0 0 2em #310D87)"
          : "drop-shadow(0 1px 2em #F9468A)",
      };
return(<div>
    <section id="tecnologias">
    <h1
        style={estilos}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        Tecnologias
      </h1>
      <br/>
      <br/>
      <br/>
<div style={estilosTry}onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}>
    {tecnolog.map((u,i)=><div 
 >
    <h2 key={i+"u"}>{u}</h2>
   
    </div>)}
    </div>
    </section>
</div>
    );
};
export default Tecnologias;
