import React from 'react';
import { Link } from 'react-router-dom';
import catImg from '../assets/cover.jpg';


const Categories = ({ categories }) => {
    return (
        <div>
            {categories.length > 0 && categories.map((category, i) =>
                <div className="card item-card border-0" key={i}>
                    <Link to="/">
                        <div className="card-body">
                            <img src={catImg} className="img-fluid" alt="..." />
                            <div className="overlay">
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Categories;