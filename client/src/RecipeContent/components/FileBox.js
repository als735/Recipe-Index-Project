import React, {Component} from "react"; 
import './FileBox.css'; 
import RecipeContent from "../RecipeContent";


class FileBox extends Component {
    render(){

        const recipes = this.props.recipes.map((e, i, a) => { //element index arr 
            return <button key={i} onClick={()=>{this.props.showRecipe(e)}}>{e.title}</button> // keys makes it so react renders faster // the arrow function is an annoymouns function and when you click the button it will run what is inbetween the curly braces, anytime you need to pass in parameters into an onclick in react you need to use this kind of funciton. 
        })

        return(
            <div>
                <div className="file-box">
                <h2>File Box</h2>
                {recipes} 
                </div>
            </div>
        ) 
    }
}

export default FileBox 

 