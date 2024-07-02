import React from 'react'
import styled from "styled-components"

function Card({title , description , imgSrc,precio}){

  return (
    <CardInfo>
        
        <div className="card-head"></div>

        <div className="card-body">
            <img src={imgSrc} />
        </div>
        <div className="card-footer">
            <h3>{title}</h3>
            <p>{description}</p> 
            <span>{precio}</span>
        </div>
        
    </CardInfo>
  )
}

const CardInfo = styled.div`
  
    border-radius: 10px;
    padding: 30px;
    position: relative;
    text-align: center;
    background-color: #151515;
    box-shadow: 0 5px 15px rgba(254, 254, 254, 0.1);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    width: 28%;
    height: 400px;
    border: 1px red solid;
    cursor: pointer;
   
  &:hover{
    transform: translateY(-10px);
    background-image: linear-gradient(45deg, #2b292a, #090909);
    cursor: pointer;
     }
    @media(max-width:625px){
      width: 50%;
    }
    @media(max-width:525px){
      width: 80%;
      height: 350px;
    }

  img{
    width: 100%;
    object-fit:cover;
  }
  h3{    
    display: block;
    color: #ffffff;
    font-size: 24px;
    margin: 0 auto 15px;
    @media(max-width:1024px){
          font-size: 20px;
        }
        @media(max-width:980px){
          font-size: 20px;
        }
        @media(max-width:625px){
          font-size:  12px;
        }
  }
  .card-footer{
    text-align: center;
    margin: 12px;
  }
  p{
    color: #fef6f6;
    line-height: 1.5;
    margin-bottom: 20px;
    @media(max-width:1024px){
          font-size: 14px;
        }
        @media(max-width:980px){
          font-size: 12px;
        }
        @media(max-width:625px){
          font-size:  10px;
        }
  }
  span{
    color: #fef6f6;
    font-size: 20px;
    @media(max-width:1024px){
          font-size: 18px;
        }
        @media(max-width:980px){
          font-size: 16px;
        }
        @media(max-width:625px){
          font-size:  14px;
        }
  }
  `
export default Card