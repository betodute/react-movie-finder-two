import React from 'react';
import { json, checkStatus } from './utils';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    }
  }
   
  componentDidMount () {
    let movieId = window.location.pathname.slice(7, -1)
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=b7da8d63`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }

        if (data.Response === 'True') {
          console.log(data);
          this.setState({ movie: data, error: '' });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
  }

  render() {
    if (!this.state.movie) {
      return null;
    }

    const {
      Title,
      Year,
      Plot,
      Director,
      imdbRating,
      Poster,
    } = this.state.movie;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-6">
            <h1 className="archivo-font">{Title}</h1>
            <ul className="list-unstyled archivo-font">
              <li>
                <p>Year: {Year}</p>
              </li>
              <li>
                <p>Director: {Director}</p>
              </li>
              <li>
                <p>Plot: {Plot}</p>
              </li>
              <li>
                <p>imdbRating: {imdbRating} / 10</p>
              </li>
            </ul>
          </div>
          <div className="col-6 mt-3">
            <img src={Poster} className="img-fluid" />
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;