import React from 'react'
import Card from '../card/Card'
import styled from 'styled-components'

function Categorias() {
  return (
    <Categ>
       <div className="container">
              <h2>Promociones y Ofertas</h2>
              <div className="catego-container">
                    <Card title="PIDE TUS COMBOS FAVORITOS" btn="Ordenar" description="Elige el combo que mas te guste y disfrutalo en casa." imgSrc="/img/comida.png" />
                    <Card title="TU BEBIDA FAVORITA" btn="Ordenar" description="Siempre para acompañar tu combo" imgSrc="/img/bebidas.png"  />
                    <Card title="UN POSTRE" btn="Ordenar"  description="Nunca puede faltar para completar el dia." imgSrc="/img/helado.png" />                    
                </div>
            </div>
    </Categ>
  )
}

const Categ = styled.div`
  .container{
    padding: 3rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  .catego-container{
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 2rem;
     @media(max-width:625px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      a{
        width: 100%;
        text-align: center;
        padding: 12px;
      }
    }
  h2{
    color: aliceblue;
    font-size: 3rem;
    text-align: left;
    padding: 0 0 0 85px ;
    cursor: pointer;
    @media(max-width:980px){
    text-align: center;
  }
  @media(max-width:625px){
    font-size: 2rem;
  }
    @media(max-width:525px){
     font-size: 1.5rem;
    padding: 0 4px 0 0;
    }
  }
  h2:hover{
    color: #fcda30;
  }
   
`

export default Categorias