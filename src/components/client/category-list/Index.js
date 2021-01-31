import React, { useState, useRef } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'


const Index = ({ categories, loading, loaderitem }) => {
    const cardWidth = useRef()
    const windowWidth = window.innerWidth
    const [staticArr] = useState([...Array(loaderitem ? loaderitem : 12).keys()])

    // When API loading start
    if (loading) {
        return (
            staticArr.map((i) => {
                return (
                    <div className="card category-item border-0" ref={cardWidth} key={i}>
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
            {categories.length > 0 && categories.map((category, i) =>
                <div className="card category-item border-0" key={i}>
                    <Link to={`category/${category.title}`}>
                        <div className="card-body">
                            <img src={category.download_url} className="img-fluid" alt="..." />
                            <div className="overlay"></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Index;