import React from "react";   
const TopBar=()=>{
    let estiloTopBar={
        display: "flex",
        gap: "10px",
        justifyContent:"center",
        aligItem:"center",
        FlexDirection:"row",
        
    };
    let estiloNav={
        display:"contents"
    }
return(<React.Fragment>
<div style={estiloTopBar}>
                <nav style={estiloNav}>
                    <a href="#sobre-mi">Sobre Mí</a>
                    <br />
                    <a href="#proyectos-realizados">Proyectos Realizados</a>
                    <br/>
                    <a href="#tecnologias">Tecnologias</a>
                    <br/>
                    <a href="#contacto">Contacto</a>
                </nav>
            
</div>
</React.Fragment>);
};
export default TopBar;