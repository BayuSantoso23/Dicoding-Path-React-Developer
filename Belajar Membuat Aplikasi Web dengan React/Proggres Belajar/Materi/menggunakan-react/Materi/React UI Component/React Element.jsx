import React from 'react';

// Cara paling mudah untuk membuat element
// React.createElement(/* type */, /* property */, /* content */);

// Penggunaan
// const element = React.createElement('p', null, 'Hello, React!');

// Return value
// {
//     type: 'p',
//     props: {
//       children: 'Hello, React!',
//     },
//   }
  
// Properti dalam elemen
// const element = React.createElement(
//     'p',
//     {
//       id: 'myParagraph',
//       className: 'red-paragraph'
//     },
//     'Hello, React!'
//   );

// Pada html
<div class="container">
  <h1>React</h1>
  <p>The <strong>best tool</strong> for building UI</p>
</div>

// Pada react
// import React from 'react';

// const heading = React.createElement('h1', null, 'React');
// const strong = React.createElement('strong', null, 'best tool');
// const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
// const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

