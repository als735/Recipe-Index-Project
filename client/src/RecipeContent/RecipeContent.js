import React, {Component} from 'react'; 
import './RecipeContent.css'; 
import data from '../data.js'; 
import AddRecipe from './components/AddRecipe'; 
import AnalyzeRecipe from './components/AnalyzeRecipe'; 
import DeleteRecipe from './components/RecipeInput'; 
import EditRecipe from './components/EditRecipe'; 
import FileBox from './components/FileBox'; 
import NextRecipe from './components/NextRecipe'; 
import PreviousRecipe from './components/PreviousRecipe'; 
import RecipeInput from './components/RecipeInput'; 


class RecipeContent extends Component {
    constructor(props) {
        super(props); 
    
        this.state = {
          testObj : data, 
          title : "", 
          ingredients: [], 
          ingredient: "", 
        }; 
    }

    handleTitleChange= (e) => {
      this.setState({
        title: e.target.value 
      })
    }

    handleIngredientChange= (e) => {
      this.setState({
        ingredient: e.target.value 
      })
    }

    handleIngredientsClick= (e) => {
      e.preventDefault()
      console.log("click", this.state.ingredient)
      let newIngredients = this.state.ingredients.slice(); 
      let newItem = newIngredients.push(this.state.ingredient) 
      console.log("i", typeof(newItem)) 
      this.setState({
        ingredients: [...this.state.ingredients,this.state.ingredient] 
      })
    }


        render(){
          let list = this.state.ingredients.map((ingredient,i)=> {
            return <li key={i}>{ingredient}</li>
          })
console.log(this.state.ingredients)
            return (
              
              <div className="App">
                <section>
                  <header>Recipe Nutritional Index</header>
                  <ul>{list}</ul>
                  <AddRecipe state={this.state} changeTitle={this.handleTitleChange} changeIngredient={this.handleIngredientChange} click={this.handleIngredientsClick}/>
                  <button>Submit</button>
               </section>
               <section>
               <button>Previous</button>
                
                 <button>Next</button>

               </section>
               <section>
                  <button>Delete</button>
                  <button>Edit</button>
                  <button>Analyze</button>
               </section>
               
        
              </div>
            ); 
        }
    }

    export default RecipeContent;

