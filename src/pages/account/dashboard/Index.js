import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../../api'
import { Icon } from 'react-icons-kit'
import { music_play_button } from 'react-icons-kit/linea'
import PreLoader from '../../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        // Fetch Tracks
        const fetchTracks = async () => {
            try {
                const response = await axios.get(`${api}users`)
                if (response.status === 200) {
                    setTracks(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        fetchTracks()
    }, [])

    if (isLoading) return (<PreLoader />)

    return (
        <div className="py-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pb-2 d-lg-none">
                        <h5 className="mb-0">Recently Played</h5>
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
        </div>
    );
};

export default Index;