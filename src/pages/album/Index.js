import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../api'

import AlbumList from '../../components/client/album-list/Index'
import FooterComponent from '../../components/client/footer/Index'
import PreLoader from '../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        // Fetch Albums
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(`${api}posts`)
                if (response.status === 200) {
                    setAlbums(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }
        fetchAlbums()
    }, [])

    if (isLoading) {
        return (
            <PreLoader />
        )
    }

    return (
        <div className="index">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        <AlbumList albums={albums} />
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <FooterComponent />
        </div>
    );
};

export default Index;