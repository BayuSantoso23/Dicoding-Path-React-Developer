import React from 'react';

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() =>{
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() =>{
            return {
                body: event.target.value
            }
        });
    }

    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addContact(this.state);
    }


    render(){
        return(
            <form action="" className='note-input' onSubmit={this.onSubmitChangeEventHandler}>
            <input type="text" placeholder='input judul' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <input type="text" placeholder='input deskripsi' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
            <button type='submit'>Buat Notes</button>
            </form>
        )
    }
}

export default NoteInput;