
import React, {Component} from "react";
import './PostForm.scss';
import { connect } from 'react-redux';


class postform extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const lastname =  this.getLastname.value;
        const email = this.getEmail.value;        
        const amount = this.getAmount.value;

        const data = {
            id: new Date(),
            name,
            lastname,
            email,
            amount
           }
           this.props.dispatch({
           type: 'ADD_FORM',
           data
           })
           this.getName.value = '';
           this.getLastname.value = '';
           this.getEmail.value = '';
           this.getAmount.value = '';        
    
           console.log(data)
    }
    
      

    render() {
        return (
            <div>
                    <h1>¡Apoyanos, inscríbete, dona y sé parte del cambio!</h1>
                        <form className = "formcont" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input 
                        type='text'
                        ref={(input)=>this.getName = input} 
                        //value={this.state.name} 
                        //onChange={this.handleChange} 
                        name='name'
                        />
                        <label>Lastname</label>
                        <input 
                            type='text'
                            ref={(input)=>this.getLastname = input} 
                            //value={this.state.school} 
                            //onChange={this.handleChange} 
                            name='surname'
                        />
                        <label>Email</label>
                        <input 
                            type='text'
                            ref={(input)=>this.getEmail = input} 
                            //value={this.state.school} 
                            //onChange={this.handleChange} 
                            name='email'
                        />
                        <label>Amount</label>
                        <input 
                            type='number'
                            ref={(input)=>this.getAmount = input} 
                            //value={this.state.school} 
                            //onChange={this.handleChange} 
                            name='amount'
                        />
                        <button>Submit</button>
                    </form>

            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const connector = connect(mapStateToProps);

export default connector(postform);
