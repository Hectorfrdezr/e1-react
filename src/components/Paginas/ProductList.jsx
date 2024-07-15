import React from 'react'
import Card from '../card/Card'
import styled from 'styled-components'

function ProductList() {
  return (
    <List>
      <div className="Listcontainer">
          <h2>Comidas</h2>
        <div className="Catego-container">
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th.png" />
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th 2.png" />
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th 3.png" />
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th 4.png" />
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th 5.png" />
        <Card title="Hamburgesa Clasica" btn="5.99$" description="Carne jugosa, queso cheddar, lechuga y tomate." imgSrc="/img/th 6.png" />
        </div>
    </div>
  </List>
  )
}

const List = styled.div`
  .Listcontainer{
    padding: 3rem 1rem 2rem;
    display: flex;
    flex-direction: column;
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
    width: 85%;
    border-radius: 12px;
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