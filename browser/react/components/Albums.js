import React from 'react';
import Link from 'react-router'

const Albums = (props) => {

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

  // let link = <Link to={`/albums/${album.id}`}/>
  // albums and albums/id are the only two being rendered in the appcontainer via clone
  // but childen can be either Albums or Album

  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
              <img src={ album.imageUrl } />

              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </a>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Albums;
