import React, {Component} from 'react'; 
import './RecipeContent.css'; 
import data from '../data.js'; 
import AddIngredient from './components/AddIngredient'; 
import SubmitRecipe from './components/SubmitRecipe'; 
import AnalyzeRecipe from './components/AnalyzeRecipe'; 
import DeleteRecipe from './components/DeleteRecipe'; 
import FileBox from './components/FileBox'; 
import Header from './components/Header'; 
import ArrowButtons from './components/ArrowButtons';


class RecipeContent extends Component {
    constructor(props) {
        super(props); 
    
        this.state = {
          testObj : data,  // this is my data I will be pulling from for API 
          title : "",  // empty string for my title 
          ingredients: [],  // empty array for ingredients 
          ingredient: "",  //empty string for each ingredient 
        }; 
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
      let newIngredients = this.state.ingredients.slice();  //copies the ingredients array 
      let newItem = newIngredients.push(this.state.ingredient) //pushes the new ingredient into newIngredients 
      this.setState({
        ingredients: [...this.state.ingredients,this.state.ingredient] // 
      })
    }

        render(){
          let list = this.state.ingredients.map((ingredient,i)=> { // 
            return <li key={i}>{ingredient}</li> // returning each individual li 
          })
console.log(this.state.ingredients)
            return (
              //pulls in each of my components to render them to RecipeContent 
              <div className="App"> 
                <section> 
                  <Header/>
                  <SubmitRecipe state={this.state} changeTitle={this.handleTitleChange}/>
                    <ul>{list}</ul>
                  <AddIngredient state={this.state} changeIngredient={this.handleIngredientChange} click={this.handleIngredientsClick}/>
                  <FileBox/>
                  <ArrowButtons/>
                  <DeleteRecipe/>
                  <AnalyzeRecipe/>
               </section>
              </div>
            ); 
        }
    }

    export default RecipeContent;

