import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import sinerImg from '../../../assets/oyshee.jpg'

const Index = ({ singers }) => {
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