import React from 'react'
import styled from "styled-components"
import Card from "../card/Card"
function Productos() {
  return (
        <Product>
          <div className="d-flex w-100 card-container">
            <Card title="Hamburgesa" description="150gr De Pechuga De Pollo Crispy Con Salsa Spicy, Pan Brioche De La Casa, Tomates Seco, Cebolla Morada, Queso Y Pesto" imgSrc="/img/th.png"/>
            <Card title="Hot dog" description="Hot dog-cebolla-ensalada-papas y salsas" imgSrc="/img/th 2.png"/>
            <Card title="Pepito" description="Carne en cuadritos, lechuga, tomate, cebolla, papa hilo, queso gauda, queso cheddar, tocino, ketchup, mostaza, mayonesa." imgSrc="/img/th 3.png"/>
            <Card title="Club House" description="Pollo-huevo-lechuga-tomate-tocino-jamon-queso y salsa" imgSrc="/img/th 4.png"/>
            <Card title="Fajita" description="Carne, mechada o pollo - tomate - choclo - lechuga - queso y guacamole más 1 salsa" imgSrc="/img/th 5.png"/>
            <Card title="Patacon" description="Platano,pollo,carne ensalda y aderezos" imgSrc="/img/th 6.png"/>
            </div>
        </Product>
  )
}

const Product = styled.div`
    
`
export default Productos