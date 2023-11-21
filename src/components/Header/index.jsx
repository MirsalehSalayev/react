import React from 'react'
import "./index.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='headerComp'>
        <div className='titleOne'>
          <h2>A Bootstrap 5 template for modern businesses</h2>
        </div>
        <div className='titleTwo'>
          <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        </div>
        <div className='buttonCont'>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className='img'>
        <img src="./img/ps2.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Header