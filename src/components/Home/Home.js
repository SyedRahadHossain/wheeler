import React from 'react';


import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div className="container">
            <Offers></Offers>
            <Services></Services>
            {/* {
                services.map(service => <Services service={service}></Services>)
            } */}


        </div>
    );
};

export default Home;