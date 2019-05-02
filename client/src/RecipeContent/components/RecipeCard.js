import React, {Component} from "react"; 
import './RecipeCard.css'; 


class RecipeCard extends Component {
    render(){

        return(
            <div>
                <div className="border">
                    <div id="recipe-card">
                        <p>Recipe Title: </p> 
                        <p>Recipe Ingredients:</p>
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

 