import React from 'react'
import { useState , useEffect, useContext} from 'react'
import styled from 'styled-components'
import logo from "/img/logo.png.png"
import Burger from "../menu/Burger"
import {Outlet,Link, useLocation} from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [ clicked , setClicked] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const location = useLocation();
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleClick = () => {
      setClicked(! clicked)
  }

  const toggleCart = () => {
    setCartVisible(!cartVisible);  
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
        setCartVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setClicked(false);
    setCartVisible(false);
  }, [location]);

  useEffect(() => {
    function handleScroll() {
      setClicked(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
        <>
        <NavContainer>
          <div className="header">
            <img className='nav-logo' src={logo} alt="" />
            <div className={`links ${clicked ? `active` : ``}`}>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="ProductList">Productos</Link>
                <Link onClick={handleClick} to="Registro">Registrate</Link>
                <Link onClick={handleClick} to="About">Sobre Nosotros</Link>
            </div>
              <div className="menu">
              <Burger clicked={clicked} handleClick={handleClick}/>  
            </div> 
            <div className="cart">
              <ShoppingCartIcon size={24} onClick={toggleCart}/>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </div>
         </div>  
          <Bg className={`initial ${clicked ? "active" : ""}`}></Bg>
        </NavContainer>

        {cartVisible && <Overlay onClick={toggleCart} />}

        <CartDropdown visible={cartVisible}>
        <h2>Tu Carrito</h2>
        {cartItems.length === 0 ? (
          <p>No hay artículos en el carrito.</p>
        ) : (
          <>
            <ul>
              {cartItems.map(item => (
                <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                   <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                    />
                   {item.title} - {item.quantity} x {item.price}$
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </>
        )}
      </CartDropdown>
        <Outlet/>
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
    z-index: 999;
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
    width: 12%;
    @media(min-width: 778px){
        display: none;
    } 
  }
  .cart {
      position: relative;
     
      a {
        color: white;
        text-decoration: none;
        position: relative;
      }
      span {
        position: absolute;
        top: -8px;
        right: -10px;
        background-color: rgb(255, 218, 87);
        color: #111010;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
      }
    }
    @media (max-width: 768px) {
      .links {
        display: none;}
      }
  .links{
      position: fixed;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .10s ease;
      right: 0;
      a{
        font-size: 2rem;
        margin-top: 1rem;
        display: block;
      }
      @media(min-width:788px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          display: inline;
        }
      }  
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 250%;
    left: 0;
    right:0;
    text-align: center;
    
  }
`;
const CartDropdown = styled.div.attrs(props => ({
  style: {
    transform: props.visible ? 'translateX(0)' : 'translateX(100%)',
  },
}))`
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;
  background-color: #272626;
  border: 1px solid #ccc;
  border-radius: 0 0 8px 8px ;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0,0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  h2 {
    margin-bottom: 1rem;
    color: #ccc;
  }
  ul {
    list-style: none;
    padding: 0;
    font-weight: 100;
    color: #ccc;
    li {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: none;
        border: none;
        padding: 0.2rem 0.5rem;
        color: rgba(255, 218, 87);
        cursor: pointer;
        &:hover {
          background-color: rgba(255, 218, 87, 0.2);
          border-radius: 5px;
            }
          }
        }
  }
  button {
    width: 100%;
    padding: 0.5rem;
    background-color: rgb(255, 218, 87);
    color: #0b0b0b;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 218, 87, 0.8); /* Fondo más claro al pasar el ratón */
    }
  }
`;
const Bg = styled.div`
position: fixed ;
background-color: #1d1f22;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: 1;
transition: all .7s ease;
  &.active{
    top:0;
    left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 40% 0;
  }
`
const ShoppingCartIcon = styled(FaShoppingCart)`
  color: white; 
  cursor: pointer;
  &:hover {
    color: #ccc; 
  }`
  const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  z-index: 708; 
  cursor: pointer;
`;

export default Navbar