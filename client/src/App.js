import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import RecipeContent from './RecipeContent/RecipeContent'; 

class App extends Component {
  componentDidMount(){
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
