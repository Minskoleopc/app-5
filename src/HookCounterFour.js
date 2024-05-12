import React, { Component } from 'react'

class HookCounterFour extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: {
                firstName: "",
                lastName: ""
            }
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            name: { ...this.state.name, firstName: event.target.value }
        });
    }
    handlelastNameChange = (event) => {
        this.setState({
            name: { ...this.state.name, lastName: event.target.value }
        });
    }


    render() {
        return (
            <form>
                <input type='text' value={this.state.name.firstname} onChange={this.handleFirstNameChange} />
                <input type='text' value={this.state.name.lastName} onChange={this.handlelastNameChange} />
                <h1>your firstName is - {this.state.name.firstName}</h1>
                <h1>your lastName is - {this.state.name.lastName}</h1>
            </form>
        )

    }

}
export default HookCounterFour