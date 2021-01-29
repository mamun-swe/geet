import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../api'
import CategoryList from '../../components/client/category-list/Index'
import FooterComponent from '../../components/client/footer/Index'
import PageLoader from '../../components/PageLoader'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // Fetch Categories
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${api}posts`)
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


    if (isLoading) {
        return (
            <PageLoader />
        )
    }

    return (
        <div className="index">

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-2">
                            <CategoryList categories={categories} />
                        </div>
                    </div>
                </div>

                {/* Footer component */}
                <FooterComponent />
            </div>

        </div>
    );
};

export default Index;