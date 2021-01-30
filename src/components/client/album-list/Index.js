import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import coverImg from '../../../assets/album.jpg'

const Index = ({ albums }) => {
    return (
        <div>
            {albums.length > 0 && albums.map((album, i) =>
                <div className="card album-item border-0" key={i}>
                    <Link to={`album/${album.title}`}>
                        <div className="card-body">
                            <img src={album.download_url} className="img-fluid" alt="..." />
                            <div className="overlay"></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Index;