// React component juga dapat dibuat menggunakan sintaksis class.
import React from 'react';
 
// Class Component 
// React secara default menawarkan fitur state dan lifecycle yang dapat Anda manfaatkan. 
// Itulah sebabnya component yang dibuat menggunakan class bersifat stateful atau disebut dengan “stateful” component
class MyComponent extends React.Component {
// Method render mendeskripsikan React element yang akan dikembalikan dan di-render.
  render() {
    const { name } = this.props;
 
    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

// Functional Component
// sedangkan component yang dibangun menggunakan function bersifat stateless karena tidak dapat memanfaatkan state. 
// Functional component hanya memanfaatkan props sebagai data dalam menampilkan UI.
function MyComponent({ name }) {
    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
}