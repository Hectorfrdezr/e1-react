import React from 'react'
import Card from '../card/Card'
import styled from 'styled-components'

function ProductList() {
  return (
    <List>
      <div className="Listcontainer">
          <h2>Comidas</h2>
        <div className="catego-container">
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th.png" />
        <Card title="Hot dog" btn="3.99$" description="hotdog, queso cheddar, lechuga y tomate." imgSrc="/img/th 2.png" />
        <Card title="Pepito" btn="8.99$" description="Carne,Pollo,Tocino, queso, lechuga y tomate." imgSrc="/img/th 3.png" />
        <Card title="Club house" btn="6.99$" description="pollo, queso, lechuga y tomate." imgSrc="/img/th 4.png" />
        <Card title="Fajita" btn="4.99$" description="Carne,Pollo,Choclo, lechuga y tomate." imgSrc="/img/th 5.png" />
        <Card title="Patacon" btn="5.99$" description="Carne jugosa,Papas, lechuga y tomate." imgSrc="/img/th 6.png" />
        </div>
        <h2>Bebidas</h2>
        <div className="catego-container">
        <Card title="Bebidas de 1.ltr" btn="2.99$" description="Todos los sabores." imgSrc="/img/Refresco-de-sabores.png" />
        <Card title="Bebidas Personal." btn="1.50$" description="Todos los sabores." imgSrc="/img/refresco-lata.png" />
        <Card title="Bebidas de 1.ltr" btn="1.99$" description="Todos los sabores." imgSrc="/img/jugos.png" />
        </div>
        <h2>Helados</h2>
        <div className="catego-container">
        <Card title="Pezi Duri" btn="1.99$" description="Chocolate." imgSrc="/img/hl1.png" />
        <Card title="M&Ms" btn="1.99$" description="Vainilla." imgSrc="/img/hl2.png" />
        <Card title="Mora Alegre" btn="1.99$" description="Helado con trosos de mora." imgSrc="/img/hl3.png" />
        <Card title="3 Sabores" btn="1.99$" description="Chocolate,vainilla y Fresa." imgSrc="/img/hl4.png" />
        <Card title="Snickers" btn="1.99$" description="Chocolate con trosos de galleta." imgSrc="/img/hl5.png" />
        <Card title="Colombina" btn="1.99$" description="Chocolate." imgSrc="/img/hl6.png" />
        <Card title="Oreo" btn="1.99$" description="Vainilla con galleta chocolate." imgSrc="/img/hl7.png" />
        <Card title="Menta granisada" btn="1.99$" description="helado con sabor a menta." imgSrc="/img/hl8.png" />
        </div>
    </div>
  </List>
  )
}

const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .Listcontainer{
    padding: 3rem 1rem 2rem;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    @media(max-width:325px){
      padding: 2rem 0 0 0;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .catego-container{
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
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
      @media(max-width:325px){
        a{
          text-align: center;
          padding: 2px;
        }
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
    margin-right: 60px;
  }
  @media(max-width:780px){
    font-size: 2.5rem;
  }
  @media(max-width:625px){
    font-size: 2rem;
  }
    @media(max-width:525px){
     font-size: 1.5rem;
    padding: 0 4px 0 0;
    margin: 0;
    }
    @media(max-width:325px){
     font-size: 20px;
     margin: 0;
    }
  }
  h2:hover{
    color: #fcda30;
  }
  img{
    width: 55%;
    border-radius: 12px;
    margin-bottom: 12px;
  }
  h3{
    font-size: 1.2rem;
  }
  .catego.container:nth-child(2){
    h3{
      font-size: 3rem;
    }
  }
`
export default ProductList