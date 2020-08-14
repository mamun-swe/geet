import React from 'react';
import { Link } from 'react-router-dom';
import albumImg from '../assets/album.jpg';


const Albums = ({ albums }) => {
    return (
        <div>
            {albums.length > 0 && albums.map((album, i) =>
                <div className="card item-card border-0" key={i}>
                    <Link to="/">
                        <div className="card-body shadow-sm">
                            <img src={albumImg} className="img-fluid" alt="..." />
                            <div className="overlay">
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Albums;