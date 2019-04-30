import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import RecipeContent from './RecipeContent/RecipeContent'; 

class App extends Component {
  componentDidMount(){ //endpoint for test this is how you are reaching back out to the back end, it's a relative path so it uses api and proxy setup. 
    axios.get('/api/test')
      .then((res)=>{
        console.log(res.data)
      })
  }


  render(){
    return (
      <div className="App">
      <RecipeContent/>
      </div>
    );
  }
}

export default App;
