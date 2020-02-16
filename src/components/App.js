import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from "./Movie";
import Header from "./Header";
import Search from "./Search";

const movieApiURL = 'http://www.omdbapi.com/?s=pulp&apikey=9b1f0811';


const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMesage] = useState(null);

    useEffect(() => {
        fetch(movieApiURL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMesage(null);
        fetch('http://www.omdbapi.com/?s='+searchValue+'&apikey=9b1f0811')
            .then(response => response.json())
            .then(jsonResponse => {if (jsonResponse.Response === "True") {
                setMovies(jsonResponse.Search);
                setLoading(false)
            } else {
                setErrorMesage(jsonResponse.Error);
                setLoading(false);
            }
        });
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <Header text={"Gad's Film Searcher"}/>
            </div>
            <div className='row'>
                <Search search={search}/>
            </div>
            <div className='row'>
            <p className="mx-auto">Sharing a few of our favourite movies</p>
            </div>
            <div className='row'>
                {loading && !errorMessage? (
                    <span className='w-100 text-center'> loading, w8 a bit</span>) :
                    errorMessage? (<div className='alert alert-danger w-100 text-center'>
                    {errorMessage}</div>) :
                    (movies.map((movie, index) => <Movie key={movie.Title+index} movie={movie}/>))
                }
            </div>
        </div>
    )



};

export default App;
