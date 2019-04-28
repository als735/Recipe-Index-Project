import React, { Component } from "react";

class AddRecipe extends Component {
    constructor(props){
        super(props); 
    }
    render() {
        

    console.log(this.props) 

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section id='inputBox'>
                    <input 
                        id='recipeName' 
                        type="text" 
                        placeholder='Name of Recipe' 
                        value={this.props.state.title} 
                        onChange={this.props.changeTitle} />

                     <input 
                        id='item' 
                        type="text" 
                        placeholder='Ingredients' 
                        value={this.props.state.ingredient} 
                        onChange={this.props.changeIngredient}/>
                        
                        <button onClick={this.props.click}>Add</button>
                    </section> 
                </form>
            </div>
        )
    }
}

export default AddRecipe;
