import React from 'react';
import Songs from '../components/Songs';
import {Link} from 'react-router'
import axios from 'axios';
import { convertAlbum, convertAlbums, skip } from '../utils';
import AUDIO from '../audio';

class Album extends React.Component {

  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render() {

    this.album = this.props.album;
    this.currentSong = this.props.currentSong;
    this.isPlaying = this.props.isPlaying;
    this.toggleOne = this.props.toggleOne;
    this.albumId = this.props.routeParams.albumId
    this.selectAlbum = this.props.selectAlbum;

  return (
    <div className="album">
      <div>
        <h3>{ this.album.name }</h3>
        <img src={ this.album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={this.album.songs}
        currentSong={this.currentSong}
        isPlaying={this.isPlaying}
        toggleOne={this.toggleOne} />
    </div>
    )
  }
}

export default Album;
