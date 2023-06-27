
// import { response } from 'express';
import './App.css';
import Card from './component/Card';
import axios from 'axios'

import { useState } from 'react';

// const Gojo = {
//   name: "Satoro Gojo",
//   age: "32",
//   occupation: "Jujutsu hunter",
//   imageuri: "https://wallpapers.com/images/hd/chibi-gojo-pfp-y94l9od6ofeaco23.jpg",
// }




function App(props) {
  const [characters, setCharaters] = useState(props.characters);
  const [postCharacter,setpostCharacter] = useState({
    name:'',
    age:'',
    occupation:'',
    imageuri:''
  });
console.log(characters);

const handleChange = (event)=>{
  setpostCharacter({...postCharacter,[event.target.name]:event.target.value});
}

 
const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(postCharacter);  // 
  axios.post('http://localhost:3001/add',postCharacter)
  .then(response =>console.log(response.data)).
  catch(err => console.log(err))
}

  return (
    <div className="App">
      <div>
        <h1>Hello world</h1>
          {characters.map(c => <Card key={c.id} character={c} /> )}
          
      </div>
      <div>
        
      <form onSubmit={handleSubmit}>
        <input type='text'placeholder='Name' onChange={handleChange} name='name'/><br/>
        <input type='text' placeholder='Age' onChange={handleChange} name='age'/><br/>
        <input type='text' placeholder='Occupation' onChange={handleChange} name='occupation'/><br/>
        <input type='text' placeholder='ImageUri' onChange={handleChange} name='imageuri'/><br/>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
