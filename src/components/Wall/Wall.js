import React, { Component } from 'react';
import './Wall.css';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      trailers: [],
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
    const trailers = datas.map((d) => d.results);

    this.setState({ videos: data.results, trailers });
  }

  scrollMovie(direction) {
    const num = direction === 'down' ? 1 : -1;
    const { scrollIndex } = this.state;
    const height = document.querySelector('.video').offsetHeight;
    this.setState((prevState) => ({ scrollIndex: prevState.scrollIndex + num }));
    const positionIndex = scrollIndex * height;
    window.scrollTo(0, positionIndex);
  }

  /* regroupe titre video */

  render() {
    const { videos, trailers } = this.state;
    return (
      <div className="wall">
        <div className="button-up">
          <button
            type="button"
            className="buttonUp"
            onClick={() => this.scrollMovie('up')}
          >
            <img
              src="https://i.imgur.com/3LEHIRr.png"
              alt="arrow up"
              className="arrow-up"
            />
          </button>
        </div>
        <div className="button-down">
          <button
            className="buttonDown"
            type="button"
            onClick={() => this.scrollMovie('down')}
          >
            <img
              src="https://i.imgur.com/TztPIB9.png"
              alt="arrow down"
              className="arrow-down"
            />
          </button>
        </div>
        {videos.map((video, i) => (
          <div className="section">
            <iframe
              className="video"
              width="760"
              height="515"
              src={`https://www.youtube.com/embed/${trailers[i][0].key}`}
              frameBorder="0"
              title={video.title}
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
