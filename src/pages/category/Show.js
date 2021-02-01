import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import {api} from '../../utils/api'
import { Icon } from 'react-icons-kit'
import { useParams } from 'react-router-dom'
import { music_play_button } from 'react-icons-kit/linea'

import Navbar from '../../components/client/navbar/Index'
import FooterComponent from '../../components/client/footer/Index'
import PreLoader from '../../components/preloader/Index'
// import Player from '../../Components/Player';

import ProfileImg from '../../assets/cover.jpg';

const Show = () => {
    const { slug } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        // Fetch Tracks
        const fetchMusicTracks = async () => {
            try {
                const response = await axios.get(`${api}list?page=5&limit=35`)
                if (response.status === 200) {
                    setTracks(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        fetchMusicTracks()
    }, [slug])


    if (isLoading) {
        return (
            <PreLoader />
        )
    }


    return (
        <div className="show">
            <Navbar/>
            <div>
                <div className="header">
                    <div className="overlay">
                        <div className="d-lg-flex">
                            <div className="profile-img-container">
                                <img src={ProfileImg} className="img-fluid" alt="..." />
                            </div>
                            <div className="px-lg-3 pt-2 pt-lg-0 align-self-end">
                                <h5 className="mb-0 text-capitalize">{slug}</h5>
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
                                <div className="tracks-container px-1">

                                    {tracks.length > 0 && tracks.map((track, i) =>
                                        <div className="d-flex track" key={i}>
                                            <div><Icon icon={music_play_button} size={35} className="text-info" /></div>
                                            <div className="pl-3">
                                                <p className="mb-0">hello task | album name</p>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer component */}
                <FooterComponent />
                {/* <Player /> */}
            </div>
        </div>
    );
};

export default Show;