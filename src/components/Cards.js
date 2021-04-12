import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from '../images/img-9.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image5 from '../images/img-5.jpg'


function Cards() {
    return (
        <div className='cards'>
          <h1>Check out this EPIC destinations!</h1>  
          <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={image1}
                        text='Explore the hidden waterfall'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src={image2}
                        text='Travel through islands od Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={image3}
                        text='Sail through the Atlantic'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src={image4}
                        text='Play football on top of the Himalayan Mountains'
                        label='Adventure'
                        path='/services'
                    />
                                        <CardItem
                        src={image5}
                        text='Top rated hotels in 2020'
                        label='Luxury'
                        path='/services'
                    />
                </ul>
            </div>  
          </div>
        </div>
    )
}

export default Cards
