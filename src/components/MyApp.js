import React, { Component } from 'react';
import './MyApp.css';


class MyApp extends Component{
  state = {
    post : {}
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/14?api_key=7f077937236d1ffe1a9deeb64a9d2a38&&append_to_response=video,image")
    .then((response) => {
      return response.json()  
      })
      .then((result) => {
          this.setState({post: result})
       console.log(result)
    })  
    }
  render() {
    return (
      <div className="App">
        <h1>{this.state.post.original_title}</h1>
        {this.state.post.overview ? this.state.post.overview : <p>chargement en court...</p> }
        <img src="/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg" alt="affiche"></img>
        {this.state.post.poster_path}
      
    </div>
    );
  }
}



export default MyApp;