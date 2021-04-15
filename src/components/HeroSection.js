import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import video from '../videos/waves.mp4'



function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='video-container' src={video} autoPlay loop muted>

            </video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/destinations'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
