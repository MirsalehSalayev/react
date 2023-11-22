import React from 'react'
import Card from '../Card/Card'
import About from '../about'
import "./index.css"

const Main = () => {
    return (
        <div className='Main'>
            <div className='mainCont'>
                <h1 className='h1'>A better way to start building.</h1>
                <div className='cardCont'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
            <div className='mainAbout'>
                <About />
            </div>

        </div>
    )
}

export default Main