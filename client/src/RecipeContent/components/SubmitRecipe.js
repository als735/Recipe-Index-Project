import React, { Component } from "react";

class SubmitRecipe extends Component {
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

                        <button onClick={this.props.click}>Submit</button>
                    </section> 
                </form>
            </div>
        )
    }
}

export default SubmitRecipe;
