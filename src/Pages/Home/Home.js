import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import api from '../../api';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_navigate_next } from 'react-icons-kit/md';

// import Player from '../../Components/Player';
import Search from '../../Components/SearchSong';
import PopularSongs from '../../Components/PopularSongs';
import Categories from '../../Components/Categories';
import Albums from '../../Components/Albums';
import Singer from '../../Components/Singer';
import Footer from '../../Components/Footer';
import PageLoader from '../../Components/PageLoader';


import girlImage from '../../assets/static/girl-music.png';
import MobileAppUI from '../../assets/static/mobile_ui.png';
// import testSong from '../../assets/song.mp3';


const Home = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch Categories
        setLoading(true)
        const fetchCategories = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setCategories(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }
        fetchCategories()
    }, [])



    return (
        <div className="home">
            {isLoading ? (
                <PageLoader />
            ) :
                <div>
                    {/* header */}
                    < div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-7 text-center text-lg-left">
                                    <h1 className="text-dark">Geet Play</h1>
                                    <button type="button" className="btn shadow-none btn-unique text-white">Login Account</button>
                                </div>
                                <div className="col-12 col-lg-5 d-none d-lg-block text-center">
                                    <img src={girlImage} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Box */}
                    <div className="search-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 m-auto">
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <Search {...props} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Songs */}
                    <div className="popular-songs">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 cat-header mb-0 px-3">
                                    <h5 className="mt-1 mb-0">popular songs</h5>
                                </div>

                                <div className="col-12 px-2">
                                    <PopularSongs songs={categories} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="categories">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 cat-header mb-0 px-3">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mt-1 mb-0">Categories</h5>
                                        </div>
                                        <div className="ml-auto">
                                            <Link to="/category">View All <Icon icon={ic_navigate_next} size={20} className="ml-2" /></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="col-12 px-2">
                                    <Categories categories={categories} />
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Albums */}
                    <div className="albums">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 cat-header mb-0">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mt-1 mb-0">Albums</h5>
                                        </div>
                                        <div className="ml-auto">
                                            <Link to="/album">View All <Icon icon={ic_navigate_next} size={20} className="ml-2" /></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="col-12 px-2">
                                    <Albums albums={categories} />
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Singer */}
                    <div className="singer">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 cat-header mb-0">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mt-1 mb-0">Singer</h5>
                                        </div>
                                        <div className="ml-auto">
                                            <Link to="/singer">View All <Icon icon={ic_navigate_next} size={20} className="ml-2" /></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="col-12 px-2">
                                    <Singer singers={categories} />
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Download App */}
                    <div className="download-app">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 content">
                                    <h2 className="text-unique">download our app</h2>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                </div>
                                <div className="col-12 col-lg-6 text-center">
                                    <img src={MobileAppUI} className="img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Footer */}
                    <Footer />

                    {/* Player */}
                    {/* <Player song={testSong} /> */}
                </div>
            }
        </div >
    );
};

export default Home;