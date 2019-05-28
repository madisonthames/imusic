import React, { Component } from 'react';
import '../App.css'
import NewReleases from './NewReleases';
import TopSongs from './TopSongs';
import TopAlbums from './TopAlbums';

class Home extends Component {
    render() {
        return (

            <React.Fragment>
                <NewReleases />
                <TopSongs />
                <TopAlbums />
            </React.Fragment>
        )
    }
}

export default Home;