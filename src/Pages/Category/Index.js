import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';

import CatImg from '../../assets/cover.jpg';

const Index = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Fetch Categories
        const fetchCategories = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setCategories(res.data)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }
        fetchCategories()
    }, [])



    return (
        <div className="index">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 m-auto text-center">
                        <div className="header">
                            <h1 className="mb-4">Lorem Ipsum Categories</h1>
                            <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                        </div>
                    </div>

                    <div className="col-12 mb-5 pb-lg-5">
                        {/* Category card */}
                        {categories.length > 0 && categories.map((category, i) =>
                            <div className="card border-0 p-2 card" key={i}>
                                <Link to={`/category/${category.id}/${category.name}`}>
                                    <div className="card-body border shadow-sm">
                                        <img src={CatImg} className="img-fluid" alt="..." />
                                    </div>
                                    <p>kick as women</p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Index;