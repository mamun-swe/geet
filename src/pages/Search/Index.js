import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import api from '../../api';
import { Icon } from 'react-icons-kit';
import { music_play_button } from 'react-icons-kit/linea/music_play_button';
import queryString from 'query-string';
import Footer from '../../Components/Footer';
import PageLoader from '../../Components/PageLoader';

const Index = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        let params = queryString.parse(props.location.search).query
        console.log(params);

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
        <div className="search-index index">
            {isLoading ? (
                <PageLoader />
            ) :
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8 m-auto text-center">
                                <div className="header">
                                    <h1 className="mb-4"><span>You search for</span> <br /> {queryString.parse(props.location.search).query}</h1>
                                </div>
                            </div>

                            <div className="col-12 mb-5 pb-lg-5 search-results">
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
                    </div>

                    <Footer />
                </div>
            }
        </div>
    );
};

export default Index;