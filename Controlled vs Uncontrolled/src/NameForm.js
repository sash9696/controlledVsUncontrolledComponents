import React from "react";

 export default class NameForm extends React.Component{
     constructor(props){
         super(props);
         this.state = {value: " "}

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(event){
         this.setState({value: event.target.value})
         
     }
     handleSubmit(event){
         event.preventDefault()
         alert('My name is:'+ this.state.value )
        
     }
     
     render(){
         return(
             <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input  onChange={this.handleChange} type='text'/>
                <button type="submit">Submit</button>
             </form>
         )
     }
 }