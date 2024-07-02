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
    height: 480px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    background-size: contain;
    background-image: url(${hero});
    background-position: center center;
    @media(max-width:980px){
          height: 400px;
      }
        @media(max-width:625px){
          height: 250px;
        }
}
.hero-info{
        width: 100%;
        height: 550px;
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
        @media (max-width: 1024px){
          font-size: 7rem;
        @media (max-width: 980px){
        font-size: 4rem;
        margin-top: 80px;
        }
        @media(max-width:625px){
        font-size: 2rem;
        margin-top: 120px;
        }
        }
    }
    h3{
        font-size: 3rem;
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        margin-bottom: 8px;
        @media(max-width:1024px){
          font-size: 4rem;
        }
        @media(max-width:980px){
          font-size: 2rem;
        }
        @media(max-width:625px){
          font-size:  1rem ;
        }
    }  
    p{
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        font-size: 2rem;
        @media(max-width:1024px){
          font-size: 2rem;
        }
        @media(max-width:980px){
          font-size: 1.5rem;
        }
        @media(max-width:625px){
          font-size:  1rem ;
        }

    }
`

export default Hero