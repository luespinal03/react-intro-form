import { useState } from "react";
import './App.css';


const sampleMovies = [
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "890,617",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
    ]
  },
  {
    "Title": "I Am Legend",
    "Year": "2007",
    "Rated": "PG-13",
    "Released": "14 Dec 2007",
    "Runtime": "101 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "Francis Lawrence",
    "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
    "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    "Language": "English",
    "Country": "USA",
    "Awards": "9 wins & 21 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    "Metascore": "65",
    "imdbRating": "7.2",
    "imdbVotes": "533,874",
    "imdbID": "tt0480249",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
    ]
  },
  {
    "Title": "300",
    "Year": "2006",
    "Rated": "R",
    "Released": "09 Mar 2007",
    "Runtime": "117 min",
    "Genre": "Action, Drama, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
    "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    "Language": "English",
    "Country": "USA",
    "Awards": "16 wins & 42 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    "Metascore": "52",
    "imdbRating": "7.7",
    "imdbVotes": "611,046",
    "imdbID": "tt0416449",
    "Type": "movie",
    "Response": "True",
    "Images": [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
    ]
  }
]





const MovieForm = (props) => {
  // un-comment line below if you want to see everything being added one by one on the console.
  // console.log(props)

  // useState("") is giving "title" its value
  // setTitle is pulling the value from the event.target (w.e user inputs on the input area) and REASSIGNING it to title
  // thats why <p>{title}</p> displays w.e user inputs inside input area
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [rated, setRated] = useState(0);
  const [released, setRealeased] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [awards, setAwards] = useState("");
  const [poster, setPoster] = useState("");
  const [metascore, setMetascore] = useState("");
  const [imbdrating, setImbdRating] = useState(0);
  const [imbdvotes, setImbdVotes] = useState(0);
  const [imbdid, setImbdID] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState([]);
  // const [response, setResponse]

  // console.log(props.handleAddMovie)


  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div>
      <label>Title: </label>
      <input type="text" onChange={(e) => { setTitle(e.target.value) }} />
      <br />

      <label>Year: </label>
      <input type="number" onChange={(e) => { setYear(e.target.value) }} />
      <br />

      <label>Rated: </label>
      <input type="number" onChange={(e) => { setRated(e.target.value) }}></input>
      <br />

      <label>Released: </label>
      <input type="date" onChange={(e) => { setRealeased(e.target.value) }}></input>
      <br />

      <label>Runtime: </label>
      <input type="number" onChange={(e) => { setRuntime(e.target.value) }}></input>
      <br />

      <label>Genre: </label>
      <input type="text" onChange={(e) => { setGenre(e.target.value) }}></input>
      <br />

      <label>Director: </label>
      <input type="text" onChange={(e) => { setDirector(e.target.value) }} />
      <br />

      <label>Writer: </label>
      <input type="text" onChange={(e) => { setWriter(e.target.value) }} />
      <br />

      <label>Actors: </label>
      <input type="text" onChange={(e) => { setActors(e.target.value) }} />
      <br />

      <label>Plot: </label>
      <input type="text" onChange={(e) => { setPlot(e.target.value) }} />
      <br />

      <label>Language: </label>
      <input type="text" onChange={(e) => { setLanguage(e.target.value) }} />
      <br />

      <label>Country: </label>
      <input type="text" onChange={(e) => { setCountry(e.target.value) }} />
      <br />

      <label>Awards: </label>
      <input type="text" onChange={(e) => { setAwards(e.target.value) }} />
      <br />

      <label>Poster: </label>
      <input type="text" onChange={(e) => { setPoster(e.target.value) }} />
      <br />

      <label>Metascore: </label>
      <input type="text" onChange={(e) => { setMetascore(e.target.value) }} />
      <br />

      <label>Imdb Rating: </label>
      <input type="number" step="0.1" onChange={(e) => { setImbdRating(e.target.value) }} />
      <br />

      <label>Imdb Votes: </label>
      <input type="number" step="0.1" onChange={(e) => { setImbdVotes(e.target.value) }} />
      <br />

      <label>Imdb ID: </label>
      <input type="text" step="0.1" onChange={(e) => { setImbdID(e.target.value) }} />
      <br />

      <label>Type: </label>
      <input type="text" onChange={(e) => { setType(e.target.value) }} />
      <br />

      <label>Image: </label>
      <input type="text" onChange={(e) => { setImage(e.target.value) }} />
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <p>Current Title: {title}</p>
      <p>Current Year: {year}</p>
      <p>Currently Rated: {rated}</p>
      <p>Current Release: {released}</p>
      <p>Current Runtime: {runtime}</p>
      <p>Current Genre: {genre}</p>
      <p>Current Director: {director}</p>
      {/* <p>Current Writer: {writer}</p>
      <p>Current Actors: {actors}</p>
      <p>Current Plot: {plot}</p>
      <p>Current Language: {language}</p>
      <p>Current Country: {country}</p>
      <p>Current Awards: {awards}</p>
      <p>Current Poster: {poster}</p>
      <p>Current Metascore: {metascore}</p>
      <p>Current Imbd Rating: {imbdrating}</p>
      <p>Current Imbd Votes: {imbdvotes}</p>
      <p>Current Imbd ID: {imbdid}</p>
      <p>Current Type: {type}</p>
      <p>Current Image: {image}</p> */}

      <button onClick={() => {
        const newMovie = {
          Title: title,
          Year: year,
          Rated: rated,
          Released: released,
          Runtime: runtime,
          Genre: genre,
          Director: director,
          Writer: writer,
          Actors: actors,
          Plot: plot,
          Language: language,
          Country: country,
          Awards: awards,
          Poster: poster,
          Metascore: metascore,
          ImbdRating: imbdrating,
          ImbdVotes: imbdvotes,
          ImbdID: imbdid,
          Type: type,
          Image: image,
        }
        // props here is allowing us to invoke handleAddMovie from another scope because its not global and the only way we can invoke it in here is by props.
        props.handleAddMovie(newMovie)
        console.log(newMovie)
      }}>Add Movie</button>
    </div>
  )
}


const MoviesDisplay = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />
      })}
    </div>
  )
};




const MovieItem = (props) => {
  return (
    <div>
      <h2>Title: {props.movie.Title}</h2>
      <p>Year: {props.movie.Year}</p>
      <p>Rated: {props.movie.Rated}</p>
      <p>Released: {props.movie.Released}</p>
      <p>Runtime: {props.movie.Runtime}</p>
      <p>Director: {props.movie.Director}</p>

    </div>
  )
}




const App = () => {

  // starts of as an EMPTY ARRAY
  const [movieList, setMovieList] = useState(sampleMovies);
  const handleAddMovie = (newMovie) => {
    const movieListCopy = [...movieList, newMovie]
    // code below is calling setMovieList with the new updated MovieListCopy which has all of the previous entries of movieList along with the newMovie
    setMovieList(movieListCopy)
  }

  console.log(movieList)

  return (
    <div className="App">
      <h1>Movie Form</h1>
      <header className="App-header">
        {/* handleAddMovie ={handleAddMovie} is calling the function and saying the value is going to be w.e it returns from it???? */}
        {/* variable = {function} */}
        <MovieForm handleAddMovie={handleAddMovie} />
        <MoviesDisplay movieList={movieList} />

      </header>
    </div>
  );
}




// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";

// const sampleMovies = [
//   ...sampleMovies
// ]

// const MovieComponent = (props) => {
// 	console.log(props.movie)
// 	const movie = props.movie
// 	return (
// 		<div>
// 			<h1>{movie.title}</h1>
// 			{/* <img src={movie.poster}></img> */}
// 		</div>
// 	)
// }

// const MovieForm = (props) => {

// 	const [Title, setTitle] = useState("")
// 	const [Director, setDirector] = useState("")
// 	const [imageUrl, setImageUrl] = useState("")
// 	const [selectedMovie, setSelectedMovie] = useState("")

// 	return (
// 		<div>
// 			<label>Title:</label>
// 			<input type="text" onChange={(e)=>{
// 				setTitle(e.target.value)
// 			}}/>
// 			<p>Current Title: {Title}</p>
// 			<button onClick={()=>{
// 				const newMovie = {
// 					Title,
// 					Director,
// 					Images: [
// 						"some url", "some other url"
// 					]
// 				}
// 				props.handleAddMovie(newMovie)
// 			}}>Add Movie</button>
// 			<br/>

// 			<select onChange={(e)=>{
// 				setSelectedMovie(e.target.value)
// 			}}>
// 				{props.movieList.map((movie)=>{
// 					return (
// 						<option value={movie.Title}>{movie.Title}</option>
// 					)
// 				})}
// 			</select>

// 			<input type="text" onChange={(e)=>{
// 				setImageUrl(e.target.value)
// 			}}/>
// 			<button onClick={()=>{
// 				props.handleAddImageToMovie(selectedMovie, imageUrl)
// 			}}>Add Image</button>
// 		</div>
// 	)
// }

// const MoviesDisplay = (props) => {
// 	return (
// 		<div>
// 			{props.movieList.map((movie, index)=>{
// 				return <MovieItem movie={movie} key={index}/>
// 			})}
// 		</div>
// 	)
// }

// const MovieItem = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.movie.Title}</h1>
// 			<p>{props.movie.Director}</p>
// 			{props.movie.Images && props.movie.Images.map((imageUrl)=>{
// 				console.log(imageUrl)
// 				return (<p>{imageUrl}</p>)
// 			})}
// 			<hr/>
// 		</div>
// 	)
// }

// function App() {

// 	const [movieList, setMovieList] = useState(sampleMovies)

// 	const handleAddMovie = (newMovie) => {
// 		const movieListCopy = [ ...movieList, newMovie ];
// 		// movieListCopy.push(newMovie)
// 		// setMovieList(movieListCopy)
// 		setMovieList(movieListCopy)
// 	}

// 	const handleAddImageToMovie = (movieTitleToTarget, imageUrlToAdd) => {
// 		const movieListCopy = [ ...movieList ];

// 		const movieTargetIndex = movieListCopy.findIndex((movie)=>{
// 			return movie.Title === movieTitleToTarget
// 		})
// 		movieListCopy[movieTargetIndex].Images.push(imageUrlToAdd)

// 		setMovieList(movieListCopy)
// 	}

// 	console.log(movieList)
//   return (
//     <div className="App App-header">
//       <MovieForm handleAddMovie={handleAddMovie} movieList={movieList} handleAddImageToMovie={handleAddImageToMovie}/>
// 			<MoviesDisplay movieList={movieList} />
//     </div>
//   );
// }

// export default App;





export default App;
