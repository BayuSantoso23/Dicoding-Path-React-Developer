import React from "react";
import { createRoot } from 'react-dom/client';

class MyForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            gender: 'Man'
        };

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }
    
    // Memberitahukan untuk menggunakan handler ketika terjadi sebuah event dalam kasus ini adalah event onchange
    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                // event.target.value mengambil nilai terbaru dari input field.
                name: event.target.value
            };
        });
    }

    onEmailChangeEventHandler(event){
        this.setState(() => {
            return {
                email: event.target.value
            };
        });
    }

    onGenderChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                gender: event.target.value
            };
        });
    }

    onSubmitChangeEventHandler(event){
        event.preventDefault();

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
            `;

        alert(message);
    }

    render(){
        return(
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmitChangeEventHandler}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
                    <br />

                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);