import React from 'react';
// Fungsi createRoot akan mengembalikan instance dari ReactDOMRoot
// yang bisa kita manfaatkan untuk me-render React element
import { createRoot } from 'react-dom/client';


// Membuat h1 dengan isinya tanpa element2 lain
const heading = React.createElement('h1', null, 'Biodata Perusahaan');

const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
 
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

const container = React.createElement('div', null, [heading, unorderedList]);

// Rendering react using root
const root = createRoot(document.getElementById('root'));
root.render(container);
