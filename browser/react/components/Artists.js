import React from 'react';
import {Link} from 'react-router'

const Artists = (props) => {

  // let link = <Link to={`/albums/${album.id}`}/>
  // albums and albums/id are the only two being rendered in the appcontainer via clone
  // but childen can be either Artists or Album

  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                {/* determine where to actually Link to later! */}
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Artists;
