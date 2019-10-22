import React from 'react';

function Wall(){
    return(    
        <div className="wall">
            
            <div className="section">
                <h2>The 100 saison 1</h2>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/qj8kHtRawHY" frameborder="0" title="The 100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="section">
                <h2>Elite saison 1</h2>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/99Q-va5jLbY" frameborder="0" title="Elite" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="section">
                <h2>STRANGER THINGS saison 1</h2>
                <iframe width="760" height="515" src="https://www.youtube.com/embed/wQoHfKDncLU" frameborder="0" title="Stranger" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
    )
}

export default Wall;
