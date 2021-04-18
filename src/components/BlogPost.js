import React, {Component} from 'react';
import {blogData} from '../json/clanci'
import '../components/Cards.css'
import Cards from '../components/Cards'


class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:blogData.filter((post)=>post.id==='1')[0] }
        console.log(this.state.data)
        console.log(this.props.idCurrent)
    }
   

    componentDidMount(){
        this.setState(
            {
            data:blogData.filter((post)=>post.id===this.props.idCurrent)[0],
        }
        )
        console.log(this.state.data)
    }
    
    render() { 
        return ( 
            <h1 className='cards-items-info'>{this.state.data.id}</h1>
         );
    }
}
 
export default BlogPost;
