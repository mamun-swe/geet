import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageLoader from '../../components/PageLoader';

import AblumImg from '../../assets/album.jpg';

const Index = () => {
    const [isLoading, setLoading] = useState(false);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Fetch Albums
        setLoading(true)
        const fetchAlbums = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setAlbums(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }
        fetchAlbums()
    }, [])


    return (
        <div className="index">
            {isLoading ? (
                <PageLoader />
            ) :
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8 m-auto text-center">
                                <div className="header">
                                    <h1 className="mb-4">Lorem Ipsum Album's</h1>
                                    <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                                </div>
                            </div>

                            <div className="col-12 mb-5 pb-lg-5">
                                {/* Album card */}
                                {albums.length > 0 && albums.map((album, i) =>
                                    <div className="card border-0 p-2 card" key={i}>
                                        <Link to={`/album/${album.id}/${album.name}`}>
                                            <div className="card-body border shadow-sm">
                                                <img src={AblumImg} className="img-fluid" alt="..." />
                                            </div>
                                            <p>kick as women</p>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
            }
        </div>
    );
};

export default Index;