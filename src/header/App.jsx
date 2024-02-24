import React, { useState } from 'react'
import './App.scss'

export default function App() {
    const [navItems, setnavItems] = useState(['Home','Service','About','Blog','Contact'])
  return (
    <div className='container'>
        <div className="main">
     <div className='nav_mainDiv'>
     <nav className='nav_firstSection'>
        <h1>LOGO</h1>
         {
            navItems.map(item=>{
                 return(
                     <ul key={item}>
                        <li>{item}  </li>
                    </ul>
                    )})
            }
        </nav>
        <span>EASY WAY TO FIND YOUR PROPERTY</span>
        <h2>Find the perfect place to stay with your family </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi ea maxime expedita aperiam minima veritatis sed, neque consectetur quae?</p>
        <form>
            <div className='inputs'>
            <input type="text" value='Enter your email...' />
            <input type="submit" value='Get Started' />

            </div>
        </form>
        </div>
       
        </div>
         <div className='nav_secondSection'>
            <div  className='nav_secondSecyionDiv'>
            <h3>Sign In</h3>
            <h4>Register</h4>
            </div>
        </div>
    </div>
  )
}
