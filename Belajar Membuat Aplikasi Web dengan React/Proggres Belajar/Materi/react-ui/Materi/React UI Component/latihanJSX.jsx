import React from 'react';
import { createRoot } from 'react-dom/client';
// Cara lain untuk menggunakan
import DicodingLogo from './dicoding-logo.png';


const element = (
    <div>
      <h1>Biodata Perusahaan</h1>
      <ul>
        <li>Nama: Dicoding Indonesia</li>
        <li>Bidang: Education</li>
        <li>Tagline: Decode Ideas, Discover Potential.</li>
        <img src="dicoding-logo.png" alt="Dicoding logo" />
        {/* Cara kedua */}
        <img src={DicodingLogo} alt="Dicoding logo" />

      </ul>
    </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);