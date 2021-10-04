import React from 'react';
import images from '../../images/not-found-404-error.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className="mt-4 text-danger">Your page is not found! Go to home</h2>
            <img className="m-5" src={images} alt="" />
        </div>
    );
};

export default NotFound;<h2>404 not found</h2>