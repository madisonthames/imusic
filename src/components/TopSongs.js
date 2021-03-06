import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopSongsLinkPage from './TopSongsLinkPage';


class TopSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topSongs: [],
        }
    }

    componentDidMount() {
        axios
        .get("/api/topSongs")
        .then(response => {
            this.setState({ topSongs: response.data.feed.results });
        })
        .catch(error => {
            console.log(error);
            this.setState({ error: "Oops, please try again."})
        });
    }

    render() {
        const { topSongs } = this.state;

        return(

            <div className='releaseContainer'>
                <h2>Top Songs</h2>
                
            <div className='fullReleaseInfo'>
                {this.state.error} 
                {topSongs.map((topSong, index) => (
                    <div className='releaseInfo'>
                        {/* <Link to={'./linkPage/topSongs/' + topSongs.id}><img className='albumArt' src={topSong.artworkUrl100}/></Link> */}
                        <p className='artist'>{topSong.artistName}</p>
                        <p className='title'>{topSong.name}</p>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default TopSongs;