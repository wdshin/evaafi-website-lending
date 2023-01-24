import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

// import Images
import work11 from "../../assets/images/work/11.jpg";
import personal06 from "../../assets/images/personal/6.jpg";

//Import Icons
import FeatherIcon from 'feather-icons-react';

const Lightbox = () => {
    useEffect(() => {
        document.getElementById("buyButton").classList.add("nav-light");
        document.querySelector(".shoppingbtn").classList.add("btn-primary");
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
            } else {
                navBar.classList.remove("nav-sticky");
                document.querySelector(".shoppingbtn").classList.add("btn-primary");
                document.querySelector(".shoppingbtn").classList.remove("btn-light");
                document.querySelector(".settingbtn").classList.add("btn-soft-primary");
            }
        }
    };
    return (
        <React.Fragment>
            <ComponentHeader
                title="Lightbox"
                breadcrumb="Lightbox"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-lightbox">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Image Lightbox </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Card className="border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded"&gt; <br /> &nbsp;
                                                    &lt;CardBody className="p-0"&gt; <br /> &nbsp; &nbsp;
                                                    &lt;Link to="assets/images/work/11.jpg" className="lightbox d-inline-block" title=""&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="assets/images/work/11.jpg" className="img-fluid" alt="work-image"&gt; <br /> &nbsp;&nbsp;
                                                    &lt;/Link&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&lt;div className="content p-3"&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 className="mb-0"&gt;&lt;Link to="portfolio-detail-one.html"
                                                    className="text-dark title"&gt;Black and white T-shirt&lt;/Link&gt;&lt;/h5&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h6 className="text-muted tag mb-0"&gt;Clothes&lt;/h6&gt;
                                                    &lt;/div&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&lt;/CardBody&gt; <br />
                                                    &lt;/Card&gt; <br />
                                                </code></pre>
                                            </h6>

                                            <Row>
                                                <Col lg={6}>
                                                    <Card className="border-0 work-container work-primary work-grid position-relative d-block overflow-hidden rounded">
                                                        <CardBody className="p-0">
                                                            <Link to="assets/images/work/11.jpg" className="lightbox d-inline-block" title="">
                                                                <img src={work11} className="img-fluid" alt="work" />
                                                            </Link>
                                                            <div className="content p-3">
                                                                <h5 className="mb-0"><Link to="/portfolio-detail-one" className="text-dark title">Black and white T-shirt</Link></h5>
                                                                <h6 className="text-muted tag mb-0">Clothes</h6>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Image Lightbox </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <pre><code className="text-danger"> <br />
                                                    &lt;Card className="border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded"&gt;<br />&nbsp;
                                                    &nbsp;&nbsp;&lt;div className="portfolio-box-img position-relative overflow-hidden"&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&lt;img className="item-container img-fluid mx-auto" src="assets/images/personal/6.jpg" alt="1" /&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&lt;div className="overlay-work"&gt;&lt;/div&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&lt;div className="content"&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 className="mb-0"&gt;&lt;Link to="portfolio-detail-one.html"
                                                    className="text-white title"&gt;Mockup box with paints&lt;/Link&gt;&lt;/h5&gt; <br />&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;h6 className="text-white-50 tag mt-1 mb-0"&gt;Photography&lt;/h6&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&lt;/div&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&lt;div className="icons text-center"&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Link to="assets/images/personal/6.jpg" className="work-icon bg-white d-inline-block
                                                    rounded-pill lightbox"&gt;&lt;FeatherIcon icon="camera" className="fea icon-sm image-icon"&gt;&lt;/FeatherIcon&gt;&lt;/Link&gt; <br />&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&lt;/div&gt; <br />&nbsp;
                                                    &lt;/div&gt; <br />
                                                    &lt;/Card&gt; <br />
                                                </code></pre>
                                            </h6>

                                            <Row>
                                                <Col lg={6}>
                                                    <Card className="border-0 work-container work-primary work-modern position-relative d-block overflow-hidden rounded">
                                                        <div className="portfolio-box-img position-relative overflow-hidden">
                                                            <img className="item-container img-fluid mx-auto" src={personal06} alt="1" />
                                                            <div className="overlay-work"></div>
                                                            <div className="content">
                                                                <h5 className="mb-0"><Link to="portfolio-detail-one.html" className="text-white title">Mockup box with paints</Link></h5>
                                                                <h6 className="text-white-50 tag mt-1 mb-0">Photography</h6>
                                                            </div>
                                                            <div className="icons text-center">
                                                                <Link to="assets/images/personal/6.jpg" className="work-icon bg-white d-inline-block rounded-pill lightbox">
                                                                    <FeatherIcon icon="camera" className="fea icon-sm image-icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Lightbox;