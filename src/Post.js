import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post:[]
         }
    }
    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + this.props.id).then(res=>{
            this.setState({post:res.data});
        })
        .catch(function(error){
                console.log(error);
            })
        }
    render() { 
        return ( <div className="Container-api">
{this.state.post.map(e =>{return ( <div className="container">
   <img className="workspace" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>
   <Link id='link' to={`/Comments/${e.id}`}><h6>{e.title}</h6></Link>  
    <p>{e.body}</p> 
</div>)})}
        </div> );
    }
}
 
export default Post;