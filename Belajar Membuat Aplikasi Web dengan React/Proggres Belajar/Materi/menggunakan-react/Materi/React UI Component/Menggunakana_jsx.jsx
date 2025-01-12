import React from "react";

// Contoh sintaksis jsx
// pastikan hanya ada satu root element yang membungkus seluruh element di dalamnya.
const name = "John";
const element = <p className="red-paragraph">Hello, {name}!</p>;

// Using jsx can avoid this createElement
const usingCreateElement = React.createElement(
    'p',
    {
      className: 'red-paragraph',
    },
    'Hello, React!',
  );

// Example of using nested element in jsx
const divContainer = (
    <div className="container">
      <h1>React</h1>
      <p>The <strong>best tool</strong> for building UI</p>
    </div>
  );

// Contoh penggunaan yang salah 
// const contohSalah = (
//     <h1>React</h1>
//     <p>The <strong>best tool</strong> for building UI</p>
//   );

// Pada contoh di atas, kami menuliskan dua root element yaitu <h1> dan <p>.
// Sintaksis JSX seperti ini tidak benar dan dianggap sebagai syntax error.  

// Using createElement
const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI'])
const Container = React.createElement('div', { className: 'container' }, [heading, paragraph]);