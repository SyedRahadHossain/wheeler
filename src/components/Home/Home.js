import React from 'react';

import Enroll from '../Enroll/Enroll';
import Services from '../Services/Services';

const Home = () => {
 
    return (
        <div className="container">
            <h2>This is Home</h2>
            <Enroll></Enroll>
            <Services></Services>
            {/* {
                services.map(service => <Services service={service}></Services>)
            } */}

         
        </div>
    );
};

export default Home;