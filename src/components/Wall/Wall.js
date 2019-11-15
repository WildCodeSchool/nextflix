import React, { Component } from 'react';
import './Wall.css';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      trailers: [],
      scrollIndex: 1,
      displayedInfosId: null,
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

  showInfos = (videoId) => {
    this.setState(prevState => ({ displayedInfosId: prevState.displayedInfosId !== videoId ? videoId : null }));
  }

  render() {
    const { videos, trailers, displayedInfosId } = this.state;
    return (
      <div className="wall">
        {videos.map((video, i) => (
          <div className="section" key={video.id}>
            <div className="video-container">
              <iframe
                className="video"
                src={`https://www.youtube.com/embed/${trailers[i][0].key}`}
                frameBorder="0"
                title={video.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={`synopsis ${displayedInfosId === video.id ? "synopsis--shown" : ""}`}>
              <button
                type="button"
                onClick={() => this.showInfos(video.id)}
                className="synopsis__toggle"
              >
                <img
                  className="synopsis__toggle-picture"
                  src="https://i.imgur.com/chpPVFL.png"
                />
              </button>
              <div className={`synopsis__infos ${displayedInfosId === video.id ? "synopsis__infos--shown" : ""}`}>
                <div className="synopsis__box-picture">
                  <img
                    className="synopsis__picture"
                    src={`https://image.tmdb.org/t/p/w500/${video.poster_path}`}
                    alt={`Poster de ${video.title}`}
                  />
                  <p className="synopsis__release-date">Sortie le {video.release_date}</p>
                </div>
                <p className="synopsis__overview">{video.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Wall;
