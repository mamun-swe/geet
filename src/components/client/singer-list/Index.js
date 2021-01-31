import React, { useState, useRef } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const Index = ({ singers, loading, loaderitem }) => {
    const cardWidth = useRef()
    const windowWidth = window.innerWidth
    const [staticArr] = useState([...Array(loaderitem ? loaderitem : 12).keys()])

    // When API loading start
    if (loading) {
        return (
            staticArr.map((i) => {
                return (
                    <div className="card singer-item border-0" ref={cardWidth} key={i}>
                        <Skeleton
                            animation={true}
                            count={1}
                            width={cardWidth.width}
                            height={windowWidth > 1480 ? 160 : 140}
                        />
                    </div>
                )
            })
        )
    }

    // When API loading end
    return (
        <div>
            {singers.length > 0 && singers.map((singer, i) =>
                <div className="card singer-item border-0" key={i}>
                    <Link to={`/singer/${singer.title}`}>
                        <div className="card-body shadow-sm">
                            <img src={singer.download_url} className="img-fluid" alt="..." />
                            <div className="overlay"></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Index;