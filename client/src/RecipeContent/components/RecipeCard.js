import React, {Component} from "react"; 
import './RecipeCard.css'; 


class RecipeCard extends Component {
    
    render(){
        console.log('props', this.props)
        let title = null; 
        let ingredients = null; 
        let calories = this.props.calories; 
        let yields = this.props.yields; 
        let fat = this.props.fat; 
        let carb = this.props.carb; 
        let fiber = this.props.fiber; 

        let calCalc = Number(calories)/Number(yields);  
        let fatCalc = Number(fat)/Number(yields); 
        let carbCalc = Number(carb)/Number(yields); 
        let fiberCalc= Number(fiber)/Number(yields); 

        console.log('cal', calories)
        

        if(this.props.recipe){
            title = this.props.recipe.title 
            ingredients = this.props.recipe.ingredients
        } 
        
        return(
            <div>
                <div className="border">
                    <div id="recipe-card">
                        <h2>Recipe Title:{title} </h2> 
                        <div>Recipe Ingredients:
                        {ingredients?ingredients.map((e,i) => <p key={i}>{e}</p>):null} 
                        {/* mapping over the array of ingredients, and for every piece of data in that array it is creating a new HTML element  */}
                        </div>
                        <br/>
                </div>
                    <div id="nutrition-card">
                         <h2>Nutritional Content</h2>
                         <p>Calories per Serving:{calCalc}g</p>
                         <p>Fat per Serving:{fatCalc}g</p>
                         <p>Carbs per Serving:{carbCalc}g</p>
                         <p>Fiber per Serving:{fiberCalc}g</p>
                         {/* {calories?calories.map((e, i) => <p key={i}>{e}</p>):null} */}
                    </div>
                </div>
            </div>
        ) 
    }
}

export default RecipeCard 

 