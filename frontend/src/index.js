import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import axios from 'axios'

// const characters = [
//   {
//     id:1,
//     name:"luffy",
//     age:"18",
//     occupation:"pirate",
//     imageuri:"https://wallpapercave.com/wp/wp9720320.jpg"
//   }
// ]



axios.get('http://localhost:3001/characters').then(response => {
  const characters = response.data;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App characters={characters} />)
})

