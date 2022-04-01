import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ButtonContainer } from './Button'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        
        <ul className="navbar-nav  align-items-center">
          <li className='nav-item ml-5v '>
            
              <Link to='/' className='nav-link'>
               <h1 className='nav__lg'>New Monitor Electronics</h1>
              </Link>
              
          </li>
          
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className='cart__button'>
            
            Cart
            
          </button>
          </Link>
          <button className='product__btn'>
            Products
          </button>
          <button className='product__btn2'>
            Services
          </button>
        

        
      </nav>
    )
  }
}


