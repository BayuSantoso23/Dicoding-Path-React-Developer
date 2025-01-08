import { readFile } from 'fs';

readFile('C:/Kursus/Dicoding/React Developer/Belajar Dasa Pemrograman JavaScript/Progres Belajar/Materi/Asynchronous Process/sample.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace('%name%', 'Dicoding')
    .replace('%your_name%', 'JavaScript');

  console.log(greeting);
});