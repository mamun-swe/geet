import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../../utils/api'

import Navbar from '../../components/client/navbar/Index'
import CategoryList from '../../components/client/category-list/Index'
import FooterComponent from '../../components/client/footer/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Fetch Categories
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${api}list?page=3&limit=42`)
                if (response.status === 200) {
                    setLoading(false)
                    setCategories(response.data)
                }
            } catch (error) {
                if (error) {
                    console.log(error.response)
                }
            }
        }
        fetchCategories()
    }, [])

    
    return (
        <div className="index">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        <CategoryList categories={categories} loading={isLoading} loaderitem={18} />
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <FooterComponent />
        </div>
    );
};

export default Index;