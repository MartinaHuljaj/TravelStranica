import React, {Component} from 'react';
import {blogData} from '../json/clanci';
import './Cards.css'

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {blogpost : blogData.id='0'}
    }


}
 
export default BlogPost;
