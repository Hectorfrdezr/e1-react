import React from 'react'
import styled from "styled-components"

function Card({title , description , imgSrc}){

  return (
    <CardInfo>
        <div className="forma">
        <div className="card-head"></div>

        <div className="card-body">
            <img src={imgSrc} />
        </div>
        <div className="card-footer">
            <h3>{title}</h3>
            <p>{description}</p> 
        </div>
        </div>
    </CardInfo>
  )
}

const CardInfo = styled.div`
  .forma{
    @media(min-width:768px){
    width: 35%;
    margin: 1%;
    color: aliceblue;
    height: 300px;
    border: 1px red solid;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
    }
    .forma:hover{
    width: 38%;
    transition-delay: ease all 1.2s;
    }
  }
  img{
    width: 100%;
    object-fit:cover;
  }
  h3{    
    font-size: 1.5rem;
  }
  .card-footer{
    text-align: center;
    margin: 12px;
  }
  p{
    margin-top: 8px;
    font-size: 13px;
  }
  `
export default Card