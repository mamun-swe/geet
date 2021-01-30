import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../api'
import SingerList from '../../components/client/singer-list/Index'
import FooterComponent from '../../components/client/footer/Index'
import PreLoader from '../../components/preloader/Index'


const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [singers, setSingers] = useState([])

    useEffect(() => {
        // Fetch Singers
        const fetchSingers = async () => {
            try {
                const response = await axios.get(`${api}posts`)
                if (response.status === 200) {
                    setSingers(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        fetchSingers()
    }, [])


    if (isLoading) {
        return (
            <PreLoader />
        )
    }

    return (
        <div className="index">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        <SingerList singers={singers} />
                    </div>
                </div>
            </div>

            {/* Footer component */}
            <FooterComponent />
        </div>
    );
};

export default Index;