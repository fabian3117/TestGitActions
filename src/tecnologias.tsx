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
        gridTemplateColumns: "repeat(4, 1fr)",
        border:"dotted",
        padding: "1.5px",
        width:"fit-content",
        willChange: "filter",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
        transition: "filter 100ms",
        TextAlign:"center",
        margin:"auto",
        borderRadius:"2px",
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
      <div style={{visibility:"hidden"}}>
<ul>
    {tecnolog.map((u,i)=><li key={i+"u"}>{u}</li>)}
</ul>
</div>
<div style={estilosTry}onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}>
    {tecnolog.map((u,i)=><div 
 >
    <h2 key={i+"u"}>{u}</h2>
    <a>as</a>
    </div>)}
    </div>
    </section>
</div>
    );
};
export default Tecnologias;
