import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import sinerImg from '../../../assets/oyshee.jpg'

const Index = ({ singers }) => {
    return (
        <div>
            {singers.length > 0 && singers.map((singer, i) =>
                <div className="card singer-item border-0" key={i}>
                    <Link to={`/singer/${singer.id}/${singer.name}`}>
                        <div className="card-body shadow-sm">
                            <img src={sinerImg} className="img-fluid" alt="..." />
                            <div className="overlay"></div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Index;