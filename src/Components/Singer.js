import React from 'react';
import { Link } from 'react-router-dom';
import sinerImg from '../assets/oyshee.jpg';

const Singer = ({ singers }) => {
    return (
        <div>
            {singers.length > 0 && singers.map((singer, i) =>
                <div className="card item-card border-0" key={i}>
                    <Link to="/">
                        <div className="card-body shadow-sm">
                            <img src={sinerImg} className="img-fluid" alt="..." />
                            <div className="overlay">
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Singer;