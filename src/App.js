import { useState } from "react";
import './App.css';


const MovieForm = (props) => {
  // useState("") is giving "title" its value
  // setTitle is pulling the value from the event.target (w.e user inputs on the input area) and REASSIGNING it to title
  // thats why <p>{title}</p> displays w.e user inputs inside input area
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [plot, setPlot] = useState("");
  const [imbd, setImbd] = useState(0);
  const [year, setYear] = useState(0);
console.log(title)
  return (
    <div>
      <label>Title: </label>
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
      <br/>
      <label>Director: </label>
      <input type="text" onChange={(e)=>{setDirector(e.target.value)}}/>
      <br/>
      <label>Actor: </label>
      <input type="text" onChange={(e)=>{setActor(e.target.value)}}/>
      <br/>
      <label>Plot: </label>
      <input type="text" onChange={(e)=>{setPlot(e.target.value)}}/>
      <br/>
      <label>Imdb Rating: </label>
      <input type="number" step="0.1" onChange={(e)=>{setImbd(e.target.value)}}/>
      <br/>
      <label>Year: </label>
      <input type="number" onChange={(e)=>{setYear(e.target.value)}}/>


      <p>Current Title: {title}</p>
      <p>Current Director: {director}</p>
      <p>Current Actor: {actor}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Imbd Rating: {imbd}</p>
      <p>Current Year: {year}</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Movie Form</h1>
      <header className="App-header">
        <MovieForm/>
      </header>
    </div>
  );
}

export default App;
