import React from 'react'
import styled from 'styled-components'

function Burger() {
  return (
    <MenuBurger>
        <div className="three col">
        <div className="hamburger" id="hamburger-5">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </MenuBurger>
  )
}
const MenuBurger = styled.div`
    .row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 45px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  @media (max-width: 658px){
    width: 25px;
    height: 3px;
  }
}

.hamburger:hover{
  cursor: pointer;
}
#hamburger-5.is-active{
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}

#hamburger-5.is-active .line:nth-child(2){
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

#hamburger-5 .line:nth-child(2){
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}


#hamburger-5.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-5.is-active .line:nth-child(1),
#hamburger-5.is-active .line:nth-child(3){
  width: 35px;
  -webkit-transform-origin: right;
  -moz-transform-origin: right;
  -ms-transform-origin: right;
  -o-transform-origin: right;
  transform-origin: right;
}

#hamburger-5.is-active .line:nth-child(1){
  -webkit-transform: translateY(15px) rotate(45deg);
  -ms-transform: translateY(15px) rotate(45deg);
  -o-transform: translateY(15px) rotate(45deg);
  transform: translateY(15px) rotate(45deg);
}

#hamburger-5.is-active .line:nth-child(3){
  -webkit-transform: translateY(-15px) rotate(-45deg);
  -ms-transform: translateY(-15px) rotate(-45deg);
  -o-transform: translateY(-15px) rotate(-45deg);
  transform: translateY(-15px) rotate(-45deg);
}

`

export default Burger