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
    console.log(data);

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
            <div className="section__synopsis">
              <div className="section__boxPicture">
                <img
                  className="section__picture"
                  src={`https://image.tmdb.org/t/p/w500/${video.poster_path}`}
                  alt="img"
                />
                <p className="section__boxPicture__releaseDate">Sortie le {video.release_date}</p>
              </div>
              <div className="section__synopsis__oveview">
                <p>
                {video.overview}
                </p>
              </div>
            </div>  
          </div>
        ))}
      </div>
    );
  }
}

export default Wall;
