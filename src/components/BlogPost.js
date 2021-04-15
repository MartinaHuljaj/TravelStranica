import React, {useState, useEffect} from 'react';
import './Cards.css'
import { Link, BrowserRouter} from "react-router-dom";
import { blogData } from '../json/clanci';

const BlogPost =({match})=>{
    const{
        params: {id},
    }=match;
    const [isLoading, setIsLoading]= useState(true)
    const [data, setData]=useState();

    useEffect(() => {
            setData(blogData);
            setIsLoading(false);
            console.log({data})
          .catch((error) => console.log(error));
      }, [id]);

      return(
          <>
            
                <li className='cards__item'>
                <Link className='cards__item__link' to={`/blog/${data.id}`}>
                <figure className='cards__item__pic-wrap' data-category={data.label}>
                    <img src={data.src} alt='travel image' className='cards__item__img'/>
                </figure> 
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{data.text}</h5>
                </div>
                </Link>
                </li>
            
          </>
      )
}
 
export default BlogPost;
