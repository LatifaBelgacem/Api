import React, {component} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Users from './Users';
import Post from './Post';
import Comments from './Comments';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path ={'/'} render ={()=>  
        <Users/>
      }/>
      <Switch>
        <Route exact path={'/Posts/:id'} 
        render ={(props)=> <Post 
        id= {props.match.params.id}
        />}
        />

        <Route path='/Comments/:postId' 
        render ={(props)=> <Comments 
        postId={props.match.params.postId}
        />}
        />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
