import React from 'react';

export default class Movies extends React.Component {
  constructor() {
    super();
    this.state = { movies: undefined, page: undefined }
  }

  componentDidMount() {

    $.get("https://api.themoviedb.org/3/movie/popular?page=1&api_key=652deb670ddfdd95399f106f134d4dc6", function (movies) {
        this.setState({
          movies: movies,
          page: 1
        });
    }.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let pageHeight = event.srcElement.body.scrollHeight;
    let scrollPosition = event.srcElement.body.scrollTop;
    let nextPage = this.state.page + 1;
    let currentMovies = this.state.movies;

    if( (scrollPosition/pageHeight) > .30) {
      $.get("https://api.themoviedb.org/3/movie/popular?page=" + nextPage +  "&api_key=652deb670ddfdd95399f106f134d4dc6", function (movies) {
        movies.results.map(function (movie) {
          currentMovies.results.push(movie);
        });

        this.setState({
          page: nextPage,
          movies: currentMovies
        })
      }.bind(this));
    }
  }

  render() {
    let movies;

    if(this.state.movies) {
      movies = this.state.movies.results.map( function (movie, index) {
        return ( <Movie key={index} movie={movie}/> )
      });
    } else {
      movies = function () {
        return (<div className="loading"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div>)
      }
    }

    return (
      <div className="row">
        <div className="category fade-in col-lg-10 col-lg-offset-1">
          <h1 className="type">Popular</h1>
        </div>
        <div className="movies col-lg-10 col-lg-offset-1">
          {movies}
        </div>
      </div>
    );
  }
}

class Movie extends React.Component {
  render() {
    let movie = this.props.movie;

    return (
      <div className="movie fade-in pull-left" key={movie.id}>
        <img src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path} />
      </div>
    );
  }
}
