import React, { Component } from "react";
import './SubmitRecipe.css'; 


class SubmitRecipe extends Component {
    // constructor(props){
    //     super(props); 
    // }
    render() {

        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <section id='inputBox'>
                    <input 
                        id='recipeName' 
                        type="text" 
                        placeholder='Name of Recipe' 
                        value={this.props.state.title} 
                        onChange={this.props.changeTitle} />
                        <br/>
                        <button id="submit" onClick={this.props.click}>Submit Card</button>
                    </section> 
                </form>
            </div>
        )
    }
}

export default SubmitRecipe;

