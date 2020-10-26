import React, { Component, Fragment } from 'react'
import HeaderMenu from "./HeaderMenu";
import { NavLink } from 'react-router-dom'
import { AJAX_REQUEST } from '../Constants/AppConstants';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        AJAX_REQUEST('POST', 'songs/all', '').then(result => {
            if (result.type == 'success') {
                this.setState({
                    songs: result.songlist
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="header_menu row">
                    <HeaderMenu />
                    <div className="center_logo_area col-md-4">
                        <NavLink to="/"><img src={require("../Assets/Images/logo.png").default} alt="Logo" /></NavLink>
                    </div>
                    <div className="right_search col-md-4">
                        <input type="text" placeholder="Search for song" />
                        <button type="button"><img src={require("../Assets/Images/magnifier.svg").default} alt="search" /> Search</button>
                    </div>
                </div>
                <div className="page_title">
                    <span className="lines"></span>
                    <span>Home</span>
                    <span className="lines"></span>
                </div>
                <div className="main_content">
                    <div className="song_listing">
                        {
                            this.state.songs.length > 0 ?
                                <Fragment>
                                    {
                                        this.state.songs.map((song_single, index) => {
                                            return (
                                                <div className="song_single" key={song_single._id}>
                                                    <div className="song_img">
                                                        <img src={require("../Assets/Images/logo.png").default} alt="Logo" />
                                                    </div>
                                                    <div className="song_text">
                                                        <p className="songtitle">Song: <span className="songname">Night vision</span></p>
                                                        <p className="songartist">Artist: <span className="songartistname">Imagin Dragon</span></p>
                                                        <p className="publishedby">Published By: <span className="publishedbyname">User Name</span></p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Fragment>
                                : <div className="no_data_found">No Song Found</div>
                        }
                        <div className="song_single">
                            <div className="song_img">
                                <img src={require("../Assets/Images/logo.png").default} alt="Logo" />
                            </div>
                            <div className="song_text">
                                <p className="songtitle">Song: <span className="songname">Night vision</span></p>
                                <p className="songartist">Artist: <span className="songartistname">Imagin Dragon</span></p>
                                <p className="publishedby">Published By: <span className="publishedbyname">User Name</span></p>
                            </div>
                        </div>
                        <div className="song_single">
                            <div className="song_img">
                                <img src={require("../Assets/Images/logo.png").default} alt="Logo" />
                            </div>
                            <div className="song_text">
                                <p className="songtitle">Song: <span className="songname">Night vision</span></p>
                                <p className="songartist">Artist: <span className="songartistname">Imagin Dragon</span></p>
                                <p className="publishedby">Published By: <span className="publishedbyname">User Name</span></p>
                            </div>
                        </div>
                        <div className="song_single">
                            <div className="song_img">
                                <img src={require("../Assets/Images/logo.png").default} alt="Logo" />
                            </div>
                            <div className="song_text">
                                <p className="songtitle">Song: <span className="songname">Night vision</span></p>
                                <p className="songartist">Artist: <span className="songartistname">Imagin Dragon</span></p>
                                <p className="publishedby">Published By: <span className="publishedbyname">User Name</span></p>
                            </div>
                        </div>
                        <div className="song_single">
                            <div className="song_img">
                                <img src={require("../Assets/Images/logo.png").default} alt="Logo" />
                            </div>
                            <div className="song_text">
                                <p className="songtitle">Song: <span className="songname">Night vision</span></p>
                                <p className="songartist">Artist: <span className="songartistname">Imagin Dragon</span></p>
                                <p className="publishedby">Published By: <span className="publishedbyname">User Name</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
