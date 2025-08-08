import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandomAnimal() {
  const animals = ["bird", "dog", "cat", "cow", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
  // const [count, setCount]= useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {

    return <AnimalShow type={animal} key={index}/>
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      {/* <div>Number of Animals is: {count}</div> */}
      <div className='animal-list'>{renderAnimals} </div>
      
    </div>
  );
}

export default App;
