import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle= {
  color:'#fff',
};

let fakeServerData = {
  user:{
    name:'Časlav',
    playlists: [
      {
        name: 'My favorites',
        songs: [
        {name:'Adio amore', duration:'4234'},
        {name:'Jos volim te', duration:'2344'},
        {name:'Jako IAKO', duration:'5652'},
        ],

      },
      { name: 'Discover Weekly',
        songs: [
          {name:'SI davno', duration:'1231'},
          {name:'Izgubila sjaj', duration:'4312'},
          {name:'Gledam te', duration:'2342'}
        ],
      },
      {
        name: 'Da nije kurcina?',
        songs: [
          {name:'Kako se', duration:'1232'},
          {name:'Rusis polako', duration:'1252'},
          {name:'A kada to vidim', duration:'1332'}
        ],
      },
      {
        name: 'REPCUGA',
        songs: [
          {name:'Tad rusim', duration:'2312'},
          {name:'Se ja', duration:'1312'},
          {name:'OKRENI', duration:'3312'}
        ],
      },
    ],
  }
}

class PlaylistCounter extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:'40%', display:'inline-block'}}>
        <h2 >{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    } , [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{...defaultStyle, width:'40%', display:'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type='text'/>
        
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, display: 'inline-block', width:'25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout( ()=>{
      this.setState({serverData: fakeServerData});
    },1000);
  }
  render() {
    return (
      <div className="App" >
       {this.state.serverData.user ?
        <div>
        <h1 style={{...defaultStyle, 'font-size':'54px'}}>
          {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={
            this.state.serverData.user.playlists}/>
          <HoursCounter playlists={
            this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
