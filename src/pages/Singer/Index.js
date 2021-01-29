import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import PageLoader from '../../Components/PageLoader';

import SingerImg from '../../assets/oyshee.jpg';

const Index = () => {
    const [isLoading, setLoading] = useState(false);
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        // Fetch Singers
        setLoading(true)
        const fetchSingers = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setSingers(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }

        fetchSingers()
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
                                    <h1 className="mb-4">Lorem Ipsum singer</h1>
                                    <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                                </div>
                            </div>

                            <div className="col-12 mb-5 pb-lg-5">
                                {/* Singer card */}
                                {singers.length > 0 && singers.map((singer, i) =>
                                    <div className="card border-0 p-2 card" key={i}>
                                        <Link to={`/singer/${singer.id}/${singer.name}`}>
                                            <div className="card-body border shadow-sm">
                                                <img src={SingerImg} className="img-fluid" alt="..." />
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