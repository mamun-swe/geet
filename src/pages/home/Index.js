import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { ic_navigate_next } from 'react-icons-kit/md'
import { api } from '../../utils/api'

// import Player from '../../components/Player';
import SearchComponent from '../../components/client/search/Index'
import Popular from '../../components/client/popular-songs/Index'
import CategoryList from '../../components/client/category-list/Index'
import AlbumList from '../../components/client/album-list/Index'
import SingerList from '../../components/client/singer-list/Index'
import FooterComponent from '../../components/client/footer/Index'
import PreLoader from '../../components/preloader/Index'
// import Login from '../../components/Modal/Auth';


import girlImage from '../../assets/static/girl-music.png';
import MobileAppUI from '../../assets/static/mobile_ui.png';
import testSong from '../../assets/song.mp3';


const Home = () => {
    const [show, setShow] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Fetch Items
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${api}list?page=2&limit=21`)
                if (response.status === 200) {
                    setCategories(response.data)
                    setLoading(false)
                    console.log(response.data)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        fetchItems()
    }, [])

    // Hide Modal
    const hideModal = () => {
        setShow(false);
    }

    if (isLoading) {
        return (
            <PreLoader />
        )
    }

    return (
        <div className="home">
            <div>
                {/* header */}
                < div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7 text-center text-lg-left">
                                <h1 className="text-dark">Geet Play</h1>
                                <button type="button" className="btn shadow-none btn-unique text-white" onClick={() => setShow(true)}>Login Account</button>
                            </div>
                            <div className="col-12 col-lg-5 d-none d-lg-block text-center">
                                <img src={girlImage} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search component */}
                <SearchComponent />

                {/* Popular songs */}
                <Popular songs={categories} />


                {/* Category section */}
                <div className="category-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 category-header mb-0 px-3">
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
                                <CategoryList categories={categories} />
                            </div>

                        </div>
                    </div>
                </div>


                {/* Album section */}
                <div className="album-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 album-header mb-0">
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
                                <AlbumList albums={categories} />
                            </div>

                        </div>
                    </div>
                </div>


                {/* Singer section */}
                <div className="singer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 singer-header mb-0">
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
                                <SingerList singers={categories} />
                            </div>

                        </div>
                    </div>
                </div>


                {/* App download section */}
                <div className="app-download-section">
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


                {/* Footer component */}
                <FooterComponent />

                {/* Player */}
                {/* <Player song={testSong} /> */}

                {/* <Login show={show} onClose={hideModal} {...props} /> */}
            </div>

        </div >
    );
};

export default Home;