import React from 'react';
 
class NameForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: ''
    };
  }
 
  render() {
    return (
      <form>
        {/* Pada element input, kita memberikan properti value dengan nilai yang berasal dari state (email). 
        Itu berarti, nilai input akan selalu sama dengan nilai state email. 
        
        ketik sesuatu di elemen input text tersebut, nilainya tidak akan berubah. 
        Ini karena nilai value akan selalu mengikuti state.*/}
        <input type="text" 
        value={this.state.email}
        // Untuk mengubah nilai state email, kita perlu membuat handler seperti ini.
        onChange={this.onEmailChangeHandler} />
      </form>
    );
  }
}