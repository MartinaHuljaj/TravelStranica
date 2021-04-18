import React, {Component} from 'react';
import {blogData} from '../json/clanci'
import '../components/Cards.css'
import Cards from '../components/Cards'


class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:blogData.filter((post)=>post.id==='1')[0] }
        console.log('prvo',this.state.data)  
    }
   componentDidMount(){
        console.log('prije',this.state.data)
        this.setState(
            {
            data:blogData.filter((post)=>post.id===this.props.idCurrent)[0],
        }
        )
        console.log('nakon',this.state.data)}
    
    render() { 
        console.log(this.state.data)
        return ( 
            <h1 className='cards-items-info'>{window.location.pathname}</h1>
         );
    }
}
 
export default BlogPost;
