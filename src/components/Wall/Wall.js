import React, { Component } from 'react';
import './Wall.css';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      trailers: [],
      scrollIndex: 1,
      showInfo:false,
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
  info = () => {
    console.log('info')
    this.state.showInfo ? this.setState({showInfo:false}):this.setState({showInfo:true})
  }
  /* regroupe titre video */

  render() {
    const { videos, trailers, showInfo } = this.state;
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
            <button 
              onClick={e => this.info()} 
              className="info--button"
            >
            I
            </button>
            <div className={showInfo ? "info--show":"info--hidden"}>
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
          </div>
        ))}
      </div>
    );
  }
}

export default Wall;
