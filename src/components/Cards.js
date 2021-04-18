import React, {useState} from 'react'
import './Cards.css'
import {blogData} from '../json/clanci'
import {Link} from 'react-router-dom'


function Cards() {
    const [idCurrent,setId]= useState('1')
    console.log(idCurrent)


    
    return (
        <div className='cards'>
          <h1>Check out this EPIC destinations!</h1>  
          <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {blogData.map((data, key)=>{
                        key=data.id
                        return(
                        <li className='cards__item' >
                            <Link className='cards__item__link' to={`/post/${data.id}`} onClick={()=>setId(data.id)} >
                            <figure className='cards__item__pic-wrap' data-category={data.label}>
                                <img src={data.src} alt='travel image' className='cards__item__img'/>
                            </figure> 
                            <div className='cards__item__info'>
                                <h5 className='cards__item__text'>{data.text}</h5>
                            </div>
                            </Link>
                        </li>
                    )})}
                </ul>
            </div>  
          </div>
        </div>
    )

    
}

export default Cards
