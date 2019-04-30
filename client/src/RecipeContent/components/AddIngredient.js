import React, { Component } from "react";

class AddIngredient extends Component {
    constructor(props){
        super(props); 
    }
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
                    <section id='inputBox'>
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

export default AddIngredient;
