import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import Images
import logo_light from "../../assets/images/logo-light.png";
import logisticsCta from "../../assets/images/logistics/cta.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//Import Feather Icons
import FeatherIcon from 'feather-icons-react';

const Provider = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <section className="section bg-cta" style={{ background: `url(${logisticsCta}) center` }}>
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-12 text-center">
                            <div className="title-heading z-index-1 position-relative">
                                <img src={logo_light} height="24" alt="" />
                                <h4 className="heading title-dark text-white my-4">World’s Leading Contract <br /> Logistics Provider</h4>
                                <p className="text-white-50 para-dark para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <Link to="#!" onClick={() => setOpen(true)} data-type="youtube" className="play-btn  mt-4 lightbox">
                                    <i><FeatherIcon icon="play" className="fea icon-ex-md text-white title-dark" /></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <ModalVideo
                        channel="youtube"
                        isOpen={open}
                        videoId="yba7hPeTSjk"
                        autoplay
                        onClose={() => setOpen(false)}
                    />
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Provider;