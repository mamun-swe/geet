import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import catImg from '../../../assets/cover.jpg'


const Index = ({ categories }) => {
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