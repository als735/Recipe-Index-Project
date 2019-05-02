import React, {Component} from "react"; 
import './RecipeCard.css'; 


class RecipeCard extends Component {
    constructor(props){
        super(props); 
    }
    render(){
        console.log(this.props)
        let title = null; 
        let ingredients = null; 
        if(this.props.recipe){
            title = this.props.recipe.title 
            ingredients = this.props.recipe.ingredients
        } 
        return(
            <div>
                <div className="border">
                    <div id="recipe-card">
                        <p>Recipe Title:{title} </p> 
                        <div>Recipe Ingredients:
                        {ingredients?ingredients.map((e,i) => <p key={i}>{e}</p>):null} 
                        {/* mapping over the array of ingredients, and for every piece of data in that array it is creating a new HTML element  */}
                        </div>
                </div>
                    <div id="nutrition-card">
                         <p>Nutritional Content:</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default RecipeCard 

 