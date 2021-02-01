import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import api from '../../api'
import { Icon } from 'react-icons-kit'
import { useParams } from 'react-router-dom'
import { music_play_button } from 'react-icons-kit/linea'

import Navbar from '../../components/client/navbar/Index'
import FooterComponent from '../../components/client/footer/Index'
import PreLoader from '../../components/preloader/Index'
// import Player from '../../Components/Player';

import ProfileImg from '../../assets/album.jpg';


const Show = () => {
    const { slug } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        // Fetch Tracks
        const fetchMusicTracks = async () => {
            try {
                const response = await axios.get(`${api}posts`)
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
            <Navbar />
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
                        {/* Details of album */}
                        <div className="col-12 col-lg-6 details mb-4">
                            <p>Song writer: dummy writer</p>
                            <p>Singer: dummy singer</p>
                            <p>Description: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        </div>
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
    );
};

export default Show;