import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { Icon } from 'react-icons-kit';
import { music_play_button } from 'react-icons-kit/linea/music_play_button';
import Footer from '../../Components/Footer';
// import Player from '../../Components/Player';

import ProfileImg from '../../assets/album.jpg';

const Show = (props) => {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        // Fetch Tracks
        const fetchTracks = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setTracks(res.data)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }

        fetchTracks()
    }, [])




    return (
        <div className="show">
            <div className="header">
                <div className="overlay">
                    <div className="d-lg-flex">
                        <div className="profile-img-box">
                            <img src={ProfileImg} className="img-fluid" alt="..." />
                        </div>
                        <div className="px-lg-3 pt-2 pt-lg-0 align-self-end">
                            <h5 className="mb-0 text-capitalize">{props.match.params.name}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body py-4">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="title pb-2">
                                <p className="mb-0">{tracks.length} Tracks</p>
                            </div>

                            {/* Tracks */}
                            <div className="tracks px-1">

                                {tracks.length > 0 && tracks.map((track, i) =>
                                    <div className="d-flex track-box" key={i}>
                                        <div><Icon icon={music_play_button} size={35} className="text-info" /></div>
                                        <div className="pl-3">
                                            <p className="mb-0">{track.company.name} | album name</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            {/* <Player /> */}
        </div>
    );
};

export default Show;