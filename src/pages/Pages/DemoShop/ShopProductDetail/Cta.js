import React from 'react';
import { Link } from 'react-router-dom';

//import Images
import work6 from "../../../../assets/images/work/6.jpg";
import work7 from "../../../../assets/images/work/7.jpg"; 

//Import Icons
import FeatherIcon from "feather-icons-react";

const Cta = () => {
    return (
        <React.Fragment>
            <div className="container-fluid mt-100 mt-60 px-0">
                <div className="py-5 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/shop-product-detail" className="text-dark align-items-center">
                                        <span className="pro-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                className="feather feather-arrow-left fea icon-sm">
                                                <FeatherIcon icon="arrow-left" className="fea icon-sm" />
                                                <line x1="19" y1="12" x2="5" y2="12">
                                                </line>
                                                <polyline points="12 19 5 12 12 5"></polyline></svg>
                                        </span>{" "}
                                        <span className="text-muted d-none d-md-inline-block">Web Development</span>{" "}
                                        <img src={work6} className="avatar avatar-small rounded shadow ms-2" style={{ height: "auto" }} alt="" />
                                    </Link>

                                    <Link to="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            className="feather feather-home icons">
                                            <FeatherIcon icon="home" className="fea icon-sm" />
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </Link>

                                    <Link to="/shop-product-detail" className="text-dark align-items-center">
                                        <img src={work7} className="avatar avatar-small rounded shadow me-2" style={{ height: "auto" }} alt="" />{" "}
                                        <span className="text-muted d-none d-md-inline-block">Web Designer</span>{" "}
                                        <span className="pro-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                className="feather feather-arrow-right fea icon-sm">
                                                <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                                                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cta;