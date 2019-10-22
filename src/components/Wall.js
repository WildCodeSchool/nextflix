import React, { Component } from 'react';

class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    async componentDidMount() {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=7f077937236d1ffe1a9deeb64a9d2a38&&append_to_response=video,image")
        const data = await response.json();
        this.setState({ videos: data.results });
    }

    render() {
        return (
            <div className="wall">
            
                {this.state.videos.map((video) => (
                    <div className="section">
                        <h2>{video.title}</h2>
                        <iframe 
                            width="760" height="515" 
                            src="https://www.youtube.com/embed/qj8kHtRawHY" 
                            frameBorder="0" title="The 100" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Wall;
