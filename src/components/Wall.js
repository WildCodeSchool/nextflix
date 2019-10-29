import React, { Component } from 'react';
import './Wall.css'; 



class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            trailer:[]
        }
    }

    /* titre */

    async componentDidMount() {
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=7f077937236d1ffe1a9deeb64a9d2a38&&append_to_response=video,image")
        const data = await response.json();
        console.log(data);

    /* video */

        const trailer=[];
        for(let i=0 ; i < data.results.length; i++){ 
            const response2 = await fetch(`https://api.themoviedb.org/3/movie/${data.results[i].id}/videos?api_key=7f077937236d1ffe1a9deeb64a9d2a38`)
            const data2 = await response2.json();
            trailer.push(data2.results);            
        }
        this.setState({ videos: data.results, trailer}); 
    }

    /* regroupe titre video */

    render() {
        return (
            <div className="wall">
            
                {this.state.videos.map((video, i) => (
                    <div className="section">
                        {/* <h2 className="trailertitle">{video.title}</h2> */}
                        <iframe className="video"
                            width="760" height="515" 
                            src={`https://www.youtube.com/embed/${this.state.trailer[i][0].key}`} 
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
