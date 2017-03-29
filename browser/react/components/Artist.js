import React from 'react';
import Songs from './Songs';
import {Link} from 'react-router'
import axios from 'axios';
import AUDIO from '../audio';
import Albums from './Albums';

class Artist extends React.Component {

  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render() {
    this.selectedArtistAlbums = this.props.selectedArtistAlbums;
    this.selectedArtistSongs = this.props.selectedArtistSongs;
    this.currentSong = this.props.currentSong;
    this.isPlaying = this.props.isPlaying;
    this.toggleOne = this.props.toggleOne;
    this.albumId = this.props.albumId;
    this.selectAlbum = this.props.selectAlbum;

    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
      selectedArtist: this.selectedArtist,
      albums: this.selectedArtistAlbums,
      songs: this.selectedArtistSongs,
      currentSong: this.currentSong,
      isPlaying: this.isPlaying,
      toggleOne: this.toggleOne,
      albumId: this.albumId,
      selectAlbum: this.selectAlbum
    };


    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    );
  }
}

export default Artist;
