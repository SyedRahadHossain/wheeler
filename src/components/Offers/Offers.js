import React from "react";
import images from "../../images/special-winter-offer.jpg";

const Offers = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-7 text-end ">
        <div className="d-flex flex-column">
        <div className="text-center">
            <h2 className="mt-4">Winter offer is knocking the door!!</h2>
            <h3 className="mb-4">Get discount 40% of all our courses!</h3>
            <img
              style={{ height: 350 }}
              className="img-fluid rounded "
              src="https://images.unsplash.com/photo-1604447199408-9798f9f64f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="d-flex  justify-content-center">
            <button className="btn btn-dark px-5 mt-4">Enroll now</button>
          </div>
        </div>
        </div>
        <div className="col-md-5">
          <img className="img-fluid mt-5" src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
