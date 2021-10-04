import React from 'react';
import images from '../../images/special-winter-offer.jpg'

const Offers = () => {
    return (
        <div className="container">
          <div className="row mb-5">
              <div className="col-md-7 text-start">
              <h1 className="mt-4">Winter offer is knocking the door!!</h1>
              <h2 className="mb-4">Get discount 40% of all our courses</h2>
              <img className="img-fluid rounded " src="https://images.unsplash.com/photo-1604447199408-9798f9f64f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
             <button className="btn btn-dark px-5 mt-4">Enroll now</button>
              </div>
              <div className="col-md-5">
              <img className="img-fluid mt-5" src={images} alt="" />
              </div>

          </div>

        </div>
    );
};

export default Offers;