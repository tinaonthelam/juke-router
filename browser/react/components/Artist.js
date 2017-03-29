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
    console.log('props in our Artist Render',this.props)
    this.selectedArtist= this.props.selectedArtist;
    this.selectedArtistAlbums = this.props.selectedArtistAlbums;
    this.selectedArtistSongs = this.props.selectedArtistSongs;

  return (
    <div>
      <h3>{this.selectedArtist.name}</h3>
      <h4>ALBUMS</h4>
        <Albums albums={this.selectedArtistAlbums}/>
      <h4>SONGS</h4>
    </div>
    )
  }
}

export default Artist;
