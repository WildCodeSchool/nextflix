import React, { Component } from 'react';
import './Wall.css';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      trailer: [],
      scrollIndex: 1,
    };
  }

  /* titre */

  async componentDidMount() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=7f077937236d1ffe1a9deeb64a9d2a38&&append_to_response=video,image');
    const data = await response.json();

    /* video */

    const promises = [];
    for (let i = 0; i < data.results.length; i++) {
      const request = fetch(`https://api.themoviedb.org/3/movie/${data.results[i].id}/videos?api_key=7f077937236d1ffe1a9deeb64a9d2a38`);
      promises.push(request);
    }

    const responses = await Promise.all(promises);
    const datas = await Promise.all(responses.map((res) => res.json()));
    const trailer = datas.map((d) => d.results);

    this.setState({ videos: data.results, trailer });
  }

  scrollMovieDown() {
    const { scrollIndex } = this.state;
    const height = document.querySelector('.video').offsetHeight;
    this.setState((prevState) => ({ scrollIndex: prevState.scrollIndex + 1 }));
    const positionIndex = scrollIndex * height;
    window.scrollTo(0, positionIndex);
  }

  scrollMovieUp() {
    const { scrollIndex } = this.state;
    const height = document.querySelector('.video').offsetHeight;
    this.setState((prevState) => ({ scrollIndex: prevState.scrollIndex - 1 }));
    const positionIndex = scrollIndex * height;
    window.scrollTo(0, positionIndex);
  }

  /* regroupe titre video */

  render() {
    const { videos, trailer } = this.state;
    return (
      <div className="wall">
        <div className="button-down">
          <button
            className="buttonDown"
            type="button"
            onClick={() => this.scrollMovieDown()}
          >
            <img
              src="https://i.imgur.com/iMNydQb.png"
              alt="arrow down"
              className="arrow-down"
            />
          </button>
        </div>
        <div className="button-up">
          <button
            type="button"
            className="buttonUp"
            onClick={() => this.scrollMovieUp()}
          >
            <img
              src="https://i.imgur.com/yw7ymJE.png"
              alt="arrow up"
              className="arrow-up"
            />
          </button>
        </div>
        {videos.map((video, i) => (
          <div className="section">
            <iframe
              className="video"
              width="760"
              height="515"
              src={`https://www.youtube.com/embed/${trailer[i][0].key}`}
              frameBorder="0"
              title="The 100"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Wall;