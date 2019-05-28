import React, { Component } from 'react';
import Play from './play.png'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <header className='header'>

                <div className='headerControlButtons'>
                    <div className='logo'>
                        <img src='https://sitejerk.com/images/apple-music-logo-transparent-9.png' className='logo'/>
                    </div>
                        
                    <div className='playIcons'>
                            <i class="fas fa-backward"></i>
                            <i class="fas fa-play"></i>
                            <i class="fas fa-forward"></i>
                    </div>

                </div>

                <div className='headerCurrentTrack'>
                        
                        <img className='currentAlbum' src='https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/55/61/91/5561917e-6d9a-a61c-dbcd-0ae630e6f195/794043200502.jpg/200x200bb.png'/>
                            <div className='currentSongInfo'>
                                <div className='headerSong'>
                                    Song
                                </div>
                                
                                <div className='songInfo'>
                                Artist - Album
                                </div>
                            </div>
                        
                </div>

                <div className='headerSearch'>
                    <div className='searchBarContainer'>
                        <i class="fas fa-search"></i>

                        <input className='searchBar' placeholder='Search'></input>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;