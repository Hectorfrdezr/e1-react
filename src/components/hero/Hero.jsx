import React from 'react'
import styled from "styled-components"
import hero from "/img/card.png"

function Hero() {
  return (
    <Heroinfo>
    <div className="portada">
        <div className="hero-info">
            <h1>El Buen Sabor</h1>
            <h3>Sabor en cada bocado.</h3>
            <p>“Comida rápida, pero sin atajos en el sabor.”</p>
        </div>
    </div>
    </Heroinfo>
  )
}

const Heroinfo = styled.div`
   .portada{
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    background-size: contain;
    background-image: url(${hero});
    background-position: center center;
    
    @media (max-width: 768px){
        margin-top: 0;
    }
    
}
.hero-info{
        width: 100%;
        height: 560px;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 80px;
        border-radius: 8px;
    }
    h1{
        font-family: cursive;
        font-size: 8rem;
        color: #f6f2f2;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        margin-bottom: 8px;
      @media (max-width: 768px){
        font-size: 4rem;
      }
      @media(max-width:525px){
        font-size: 2rem;
      }
    }
    h3{
        font-size: 3rem;
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        margin-bottom: 8px;
    }
    p{
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        font-size: 2rem;
       

    }
`

export default Hero