import React, { useRef, useState } from 'react'
import './style.scss'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {
    ic_keyboard_arrow_left,
    ic_keyboard_arrow_right
} from 'react-icons-kit/md'
import { play } from 'react-icons-kit/fa'
import Skeleton from 'react-loading-skeleton'

const Index = ({ songs, loading }) => {
    const customeSlider = useRef()
    const cardWidth = useRef()
    const windowWidth = window.innerWidth
    const [staticArr] = useState([...Array(16).keys()])

    // Carousel setting
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    const next = () => customeSlider.current.slickNext()
    const previous = () => customeSlider.current.slickPrev()

    return (
        <div className="popular-songs">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-0 px-3">
                        <h5 className="mt-1 mb-0 ml-2">popular songs</h5>
                    </div>

                    <div className="col-12 px-2">

                        <div className="song-slider">
                            {loading ?
                                // When API loading start
                                <Slider ref={customeSlider} {...settings}>
                                    {staticArr.map((i) => {
                                        return (
                                            <div className="card border-0 p-2" key={i} ref={cardWidth}>
                                                <Skeleton
                                                    animation={true}
                                                    count={1}
                                                    width={cardWidth.width}
                                                    height={windowWidth > 1480 ? 160 : 140}
                                                />
                                            </div>
                                        )
                                    })}
                                </Slider> :
                               
                               // When API loading end
                                <Slider ref={customeSlider} {...settings}>
                                    {songs.length > 0 && songs.map((song, i) =>
                                        <div className="card border-0 p-2" key={i}>
                                            <Link to="/">
                                                <div className="card-body">
                                                    <img src={song.download_url} className="img-fluid" alt="..." />
                                                    <div className="overlay">
                                                        <div className="flex-center flex-column">
                                                            <Icon size={30} className="icon" icon={play} style={{ color: '#fff' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </Slider>
                            }
                            <button type="button" className="btn rounded-circle shadow-none prev-btn" onClick={previous}>
                                <Icon size={30} icon={ic_keyboard_arrow_left} style={{ color: '#555' }} />
                            </button>
                            <button type="button" className="btn rounded-circle shadow-none next-btn" onClick={next}>
                                <Icon size={30} icon={ic_keyboard_arrow_right} style={{ color: '#555' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;