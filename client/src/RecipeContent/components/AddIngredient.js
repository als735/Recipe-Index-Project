import React, { Component } from "react";
import './AddIngredient.css'; 


class AddIngredient extends Component {
    constructor(props){
        super(props); 

        this.state = {
            title : "",  // empty string for my title 
            ingredients: [],  // empty array for ingredients 
            ingredient: "",  //empty string for each ingredient 
            recipes: [], 
          }; 
    }
    render() {

    let list = this.props.state.ingredients.map((ingredient,i)=> { // 
        return <li key={i}>{ingredient}</li> // returning each individual li 
      })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section id='ingredientBox'>
                    <br/>
                     <input 
                        id='item' 
                        type="text" 
                        placeholder='Ingredients' 
                        value={this.props.state.ingredient} 
                        onChange={this.props.changeIngredient}/>
                        <br/>
                        <button id="add" onClick={this.props.click}>Add ingredient</button>
                        <br/>
                        <h4>Ingredients List</h4>
                        <br/>
                        <ul>{list}</ul>
                    </section> 
                </form>
            </div>
        )
    }
}

export default AddIngredient;
