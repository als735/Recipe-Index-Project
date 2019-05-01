import React, { Component } from "react";
import './AddIngredient.css'; 


class AddIngredient extends Component {
    //constructor(props){
    //     super(props); 
    // }
    render() {
        
// AddRecipe =(recipe) => {
//     Axios.post('/api/recipe', recipe)
//     .then((res)=>{
//     this.setState({
//     Recipe_list:res.data
//             })
//             })
//             }

    console.log(this.props) 

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section id='ingredientBox'>
                    <label>Add Ingredients</label>
                    <br/>
                     <input 
                        id='item' 
                        type="text" 
                        placeholder='Ingredients' 
                        value={this.props.state.ingredient} 
                        onChange={this.props.changeIngredient}/>
                        <button id="add" onClick={this.props.click}>Add ingredient</button>
                    </section> 
                </form>
            </div>
        )
    }
}

export default AddIngredient;
