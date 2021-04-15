import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import {blogData} from '../../json/clanci'


export default function Blog(){

    return (
    <>
    <h1 className='blog'>BLOG</h1>
    <Cards />
    </>
    )
}