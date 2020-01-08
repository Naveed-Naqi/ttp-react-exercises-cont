import React, { Component } from 'react'

let copyOfState;

export default class FormEdit extends Component {

    constructor(props) {
        super(props);

        this.state ={
            firstName: "",
            lastName: "",
            isEdit: false
        };
    }

    handleClick = () => {

        copyOfState = this.state;
        console.log(copyOfState);

        this.setState({
            isEdit: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        }, () => {
            console.log(this.state)
        });
    }

    handleSave = () => {
        this.setState({
            isEdit: false
        });
    }

    handleCancel = () => {

        console.log(copyOfState.firstName);

        this.setState({
            firstName: copyOfState.firstName,
            lastName: copyOfState.lastName,
            isEdit: false
        });
    }

    determineDisplay = () => {
        
        if(this.state.isEdit) {
            return (
                <div>
                    <input type="text" id="firstName" onChange={this.handleChange} placeholder={this.state.firstName}></input>
                    <input type="text" id="lastName" onChange={this.handleChange} placeholder={this.state.lastName}></input>

                    <button onClick={this.handleSave}>Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
                
            );
        } else {
            return (
                <div>
                    <div>
                        <p>First Name: {this.state.firstName}</p>
                        <p>Last Name: {this.state.lastName}</p>
                    </div>

                    <button
                        onClick={this.handleClick}
                    >Edit</button>
                </div>
            );
        }
    }

    render() {

        let display = this.determineDisplay();
        return (
            <div>
                {display}
            </div>
        )
    }
}
