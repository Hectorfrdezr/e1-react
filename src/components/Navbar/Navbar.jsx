import React from 'react'
import styled from 'styled-components'
import logo from "/img/logo.png.png"
import Burger from "../menu/Burger"
// import {Outlet,Link} from "react-router-dom"

function Navbar() {
  return (
        <>
        <NavContainer>
          <div className="header">
            <img className='nav-logo' src={logo} alt="" />
            <div className='links'>
                <a href="/">Home</a>
                <a href="">Categorias</a>
                <a href="">About</a>
            </div>
            <div className="menu">
              <Burger/>
            </div>
          </div>  
        </NavContainer>
        {/* <Outlet/> */}
        </>
  )
}

const NavContainer = styled.nav`
  .nav-logo{
    width: 6%;
    cursor: pointer;
    @media (max-width: 768px){
      width: 12%;
    }
    }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #141619;
    padding: 0px 45px;
    position: fixed;
    width: 100%;
    z-index: 1;
    height: 65px;
  }
  a{
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
  a:hover{
    color: #fcda30;
    text-decoration-line: underline;
  }
  .menu{
    @media(min-width: 778px){
        display: none;
    } 
  }
  .links a{
    @media(max-width: 768px){
      display: none;}
  }
    
`

export default Navbar