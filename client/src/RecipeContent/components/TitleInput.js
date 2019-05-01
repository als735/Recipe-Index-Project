import React, { Component } from "react";
import './TitleInput.css'; 


class TitleInput extends Component {
    // constructor(props){
    //     super(props); 
    // }
    render() {
        

    console.log(this.props) 

        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div id='inputBox'>
                    <label id="recipeLabel">Recipe Name</label>
                    <br/>
                     <input 
                        id='recipeName' 
                        type="text" 
                        placeholder='Name of Recipe' 
                        value={this.props.state.title} 
                        onChange={this.props.changeTitle}/>                       
                    </div> 
                </form>
            </div>
        )
    }
}

export default TitleInput;
