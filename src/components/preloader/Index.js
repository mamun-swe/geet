import React from 'react'
import './style.scss'

const PreLoader = () => {
    return (
        <div className="preloader">
            <div className="flex-center flex-column">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    );
};

export default PreLoader;