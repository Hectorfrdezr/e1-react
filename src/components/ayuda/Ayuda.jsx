import React from 'react'
import styled from "styled-components"
import mapa from "../../../public/img/mapa.png"

function Ayuda() {
  return (
    <Ayud>
            <h2>CONÓCENOS:</h2>
        <div className="container">
            <div className="a-contain">
                <a href="#">Acerca de El Buen Sabor</a>
                <a href="#">Historia</a>
                <a href="#">Contáctanos</a>
            </div>
            <div className="mapa">
            <img src={mapa} alt="" />
            </div>
        </div>
    </Ayud>
  )
}
const Ayud = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
.container{
    display: flex;
    justify-content: space-around;
    border: 1px red solid;
}
.a-contain{
    max-width:1200px;
    flex-direction: column;
}
img{
    width: 80%;
    border-radius: 12px;
    margin-top: 20px;
}
h2{
    font-size: 2rem;
    text-align: center;
    margin: 20px 0;
    font-weight: 700;
    color: aliceblue;
    &:hover{
        color:#fcda30 ;
    }
}
a{
    text-decoration: none;
    color: aliceblue;
    text-align: left;
    font-size: 20px;
}
` 

export default Ayuda