import React, { Component } from 'react';
import axios from 'axios';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            com:[]
         }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + this.props.postId).then(res=>{
            this.setState({com:res.data});
        })
        .catch(function(error){
                console.log(error);
            })
        }
    render() { 
        return (  <div className="container-comment">
            {this.state.com.map(e =>{return ( <div className="Comment">
                <div  className="comment-photo">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPUdrUjqvdZ-mx5UqlaHC5IDt1scvlfU4VZbjWun45ae808xJ"  />
            <h6>{e.name}</h6>
                </div>
                 
                <p>{e.body}</p> 
            </div>)})}
        </div> );
    }
}
 
export default Comments;