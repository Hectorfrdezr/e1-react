import React from 'react'
import styled from "styled-components"
import Card from "../card/Card"
function Productos() {
  return (
        <Product>
          <div className="container">
              <h2>Productos</h2>
              <div className="card-container">
                    <Card title="Hamburgesa" description="150gr De Pechuga De Pollo Crispy Con Salsa Spicy, Pan Brioche De La Casa, Tomates Seco, Cebolla Morada, Queso Y Pesto" imgSrc="/img/th.png" precio="$6500"/>
                    <Card title="Hot dog" description="Hot dog-cebolla-ensalada-papas y salsas" imgSrc="/img/th 2.png" precio="$3500"/>
                    <Card title="Pepito" description="Carne en cuadritos, lechuga, tomate, cebolla, papa hilo, queso gauda, queso cheddar, tocino, ketchup, mostaza, mayonesa." imgSrc="/img/th 3.png" precio="$9000"/>
                    <Card title="Club House" description="Pollo-huevo-lechuga-tomate-tocino-jamon-queso y salsa" imgSrc="/img/th 4.png" precio="$5500"/>
                    <Card title="Fajita" description="Carne, mechada o pollo - tomate - choclo - lechuga - queso y guacamole más 1 salsa" imgSrc="/img/th 5.png" precio="$5500"/>
                    <Card title="Patacon" description="Platano,pollo,carne ensalda y aderezos" imgSrc="/img/th 6.png" precio="$1200"/>
                </div>
            </div>
        </Product>
  )
}

const Product = styled.div`
  .container{
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-container{
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 2rem;
     @media(max-width:625px){
        flex-direction: column;
      }
  }
  h2{
    color: aliceblue;
    font-size: 2.5rem;
    cursor: pointer;
  }
  h2:hover{
    color: #fcda30;
  }
   
  
    
`
export default Productos