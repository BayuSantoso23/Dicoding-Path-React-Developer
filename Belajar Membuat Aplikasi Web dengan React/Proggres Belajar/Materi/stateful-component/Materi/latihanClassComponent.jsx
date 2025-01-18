import React from 'react';
import {createRoot} from 'react-dom/client';

class MyComponent extends React.Component {
    // memanfaatkan constructor untuk menginisialisasi data
    constructor(props) {
        // selalu memanggil base constructor (super) dan berikan nilai props
        super(props);
        console.log('Component created!');
    }

    render(){
        // return <p>Hello</p>;
        // beri nilai properti name pada MyComponent
        // this pada class component bernilai instance dari component itu sendiri
        return <p>Hello, {this.props.name}</p>;
    }
}

const root = createRoot(document.getElementById('root'));
// root.render(<MyComponent />);
root.render(
    <div>
      <MyComponent name="Dicoding" />
      <MyComponent name="John" />
      <MyComponent name="Doe" />
    </div>
  );