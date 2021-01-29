import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import coverImg from '../../../assets/album.jpg'

const Index = ({ albums }) => {
    return (
        <div>
            {albums.length > 0 && albums.map((category, i) =>
                <div className="card album-item border-0" key={i}>
                    <Link to={`category/${category.id}/${category.name}`}>
                        <div className="card-body">
                            <img src={coverImg} className="img-fluid" alt="..." />
                            <div className="overlay"></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Index;