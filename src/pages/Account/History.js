import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { Icon } from 'react-icons-kit';
import { music_play_button } from 'react-icons-kit/linea/music_play_button';
import PageLoader from '../../Components/PageLoader';

const History = () => {
    const [isLoading, setLoading] = useState(false);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        // Fetch Tracks
        setLoading(true)
        const fetchTracks = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setTracks(res.data)
                    setLoading(false)
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
        <div className="py-2">
            {isLoading ? (
                <PageLoader />
            ) :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pb-2 d-lg-none">
                            <h5 className="mb-0">History</h5>
                        </div>

                        <div className="col-12">
                            {/* Tracks */}
                            <div className="tracks px-1">

                                {tracks.length > 0 && tracks.map((track, i) =>
                                    <div className="d-flex track-box w-100" key={i}>
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
            }
        </div>
    );
};

export default History;