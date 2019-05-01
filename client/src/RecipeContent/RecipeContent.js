import React, {Component} from 'react'; 
import axios from 'axios';  //http library, it is the engine that is able to utilize http requests// its the instigator or the mover from one ip to another to send and retrieve data  
import './RecipeContent.css'; 
import data from '../data.js'; 
import AddIngredient from './components/AddIngredient'; 
import SubmitRecipe from './components/SubmitRecipe'; 
import AnalyzeRecipe from './components/AnalyzeRecipe'; 
import DeleteRecipe from './components/DeleteRecipe'; 
import FileBox from './components/FileBox'; 
import Header from './components/Header'; 
import ArrowButtons from './components/ArrowButtons';

// import { get } from 'https';


class RecipeContent extends Component {
    constructor(props) { //whne your accessing props you are accessing a parent from a child 
        super(props); 
    
        this.state = {
          testObj : data,  // this is my data I will be pulling from for API 
          title : "",  // empty string for my title 
          ingredients: [],  // empty array for ingredients 
          ingredient: "",  //empty string for each ingredient 
          recipes: [], 
        }; 
    }

    componentDidMount(){
      axios.get('/api/getRecipes').then(res => {
        this.setState({
          recipes: res.data, 
        })
      }) 
    }

    showComponent(){

      //1 create a show component will show the recipe that is displayed in the main screen
// the main component will receive props, they will be the title and the list of ingredients 
    }

    handleTitleChange= (e) => {  //this is to set the title to whatever is in the input 
      this.setState({
        title: e.target.value 
      })
    }

    handleIngredientChange= (e) => {  //this is to set the ingredient to whatever is in the input 
      this.setState({
        ingredient: e.target.value 
      })
    }

    handleIngredientsClick= (e) => { //when the add button is clicked 
      e.preventDefault()
      this.setState({
        ingredients: [...this.state.ingredients,this.state.ingredient] // 
      })
    }

    postDataToServer= (e) => {
      e.preventDefault()
      let newRecipe = {
        title: this.state.title,  //accesses the title and ingredients in prep to send them to the back end 
        ingredients: [...this.state.ingredients] 
      }; 
      axios.post('/api/createRecipe', newRecipe).then(res => { 
        //I want to send it to this location, I want to send this piece of code/ and then sends the newRecipe to the back end. .then is what will happen after your promise is resolved, or the code ahead of it similar to a CB, so the .then is when you get your response back from the backend. 
        this.setState({recipes: res.data, ingredients: [], ingredient: "", title: ""})
          //post the data back to state to my recipes and // then send it down to a child component utilitzing props 
      }) 
    }

    showRecipe= (recipe) => {
      console.log(recipe)
    }

        render(){
          let list = this.state.ingredients.map((ingredient,i)=> { // 
            return <li key={i}>{ingredient}</li> // returning each individual li 
          })
          let recipeList = this.state.recipes.map((e, i)=> {
            return <li key={i}>{e.title}</li>
          })
console.log(this.state.ingredients)
            return (
              //pulls in each of my components to render them to RecipeContent 
              <div className="App">  
                  <Header/>
                  <div id="leftNav">
                  <FileBox recipes={this.state.recipes} showRecipe={this.showRecipe}/>
                  </div>
                  <div id="mainInputs">
                  <ul>{list}</ul>
                  <AddIngredient state={this.state} changeIngredient={this.handleIngredientChange} click={this.handleIngredientsClick}/>
                  <ul>{recipeList}</ul>
                  <SubmitRecipe state={this.state} changeTitle={this.handleTitleChange} click={this.postDataToServer}/>
                  </div>
                  <div>
                  <ArrowButtons/>
                  <DeleteRecipe/>
                  <AnalyzeRecipe/>
                  </div>
                </div>
            ); 
        }
    }

    export default RecipeContent;

