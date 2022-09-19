import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import WelcomeButton from './WelcomeButton';
import {React, useState, useEffect} from 'react';


function App() {

  // const [nameFromApi, setNameFromApi] = useState([])

  // useEffect (()=> {
  //   fetch('https://randomuser.me/api/')
  // .then(res => res.json())
  // .then(data => {
  //   console.log(data.results[0].name.first)
  //   setNameFromApi(data.results[0].name.first)
  // })
  // }, [])o


  

  const name = ['George', 'David', 'Teana', 'Siobhan']
  
  return (
    <div className="App">
      <Welcome nameList={name}></Welcome>
      <WelcomeButton></WelcomeButton>
    </div>
  );
}



export default App;
