import React from 'react';

const PageLoader = () => {
    return (
        <div className="page-loader">
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

export default PageLoader;