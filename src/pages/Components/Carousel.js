import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";
import Slidewithindicator from "./CarouselTypes/slidewithindicator";
import Slidewithcaption from "./CarouselTypes/slidewithcaption";
import SlideWithAnimation from "./CarouselTypes/slideWithAnimation";

const Carousel = () => {
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
                title="Carousel"
                breadcrumb="Carousel"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-carousel">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Carousel #1 </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger">
                                                    &lt;div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&lt;div className="carousel-indicators"&gt;< br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                                    className="active" aria-current="true" aria-label="Slide 1"&gt;&lt;/button&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"&gt;&lt;/button&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"&gt;&lt;/button&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&lt;div className="carousel-inner"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="carousel-item active"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="assets/images/blog/slide01.jpg" className="d-block w-100" alt="..."&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="carousel-item"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="assets/images/blog/slide02.jpg" className="d-block w-100" alt="..."&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="carousel-item"&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="assets/images/blog/slide03.jpg" className="d-block w-100" alt="..."&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&lt;/div&gt; <br />
                                                    &nbsp;&nbsp;&lt;/div&gt; <br />
                                                </code></pre>
                                            </h6>
                                            <Slidewithindicator />
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Carousel #2 </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &lt;section className="home-slider position-relative"&gt;<br />
                                                    &nbsp;&lt;div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel"&gt;<br />
                                                    &nbsp; &lt;div className="carousel-inner"&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="carousel-item active" data-bs-interval="3000"&gt;<br />
                                                    &nbsp;&nbsp;  &lt;div className="bg-home-75vh d-flex align-items-center" style="background: url('assets/images/blog/bg1.jpg') center center;"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;div className="bg-overlay"&gt;&lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;div className="container"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="row mt-5 justify-content-center"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;   &lt;div className="col-12 text-center text-white"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;span&gt;Your Content&lt;/span&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;  &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="carousel-item" data-bs-interval="3000"&gt;<br />
                                                    &nbsp;&lt;div className="bg-home-75vh d-flex align-items-center" style="background: url('assets/images/blog/bg2.jpg') center center;"&gt;<br />
                                                    &nbsp; &lt;div className="bg-overlay"&gt;&lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;div className="container"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;div className="row mt-5 justify-content-center"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;   &lt;div className="col-12 text-center text-white"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;span&gt;Your Content&lt;/span&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;   &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;  &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />

                                                    &lt;div className="carousel-item" data-bs-interval="3000"&gt;<br />
                                                    &nbsp; &lt;div className="bg-home-75vh d-flex align-items-center" style="background: url('assets/images/blog/bg3.jpg') center center;"&gt;<br />
                                                    &nbsp; &lt;div className="bg-overlay"&gt;&lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;div className="container"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;div className="row mt-5 justify-content-center"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;   &lt;div className="col-12 text-center text-white"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;span&gt;Your Content&lt;/span&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;   &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp; &lt;/div&gt;<br />
                                                    &lt;/div&gt;<br />
                                                    &lt;a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev"&gt;<br />
                                                    &nbsp;&nbsp;  &lt;span className="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;<br />
                                                    &nbsp;&nbsp;  &lt;span className="visually-hidden"&gt;Previous&lt;/span&gt;<br />
                                                    &lt;/a&gt;<br />
                                                    &lt;a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next"&gt;<br />
                                                    &nbsp;&nbsp;  &lt;span className="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;<br />
                                                    &nbsp;&nbsp;  &lt;span className="visually-hidden"&gt;Next&lt;/span&gt;<br />
                                                    &lt;/a&gt;<br />
                                                    &lt;/div&gt;<br />
                                                    &lt;/section&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <section className="home-slider position-relative carousel-overlay">
                                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                                    <div className="bg-overlay"></div>
                                                    <Slidewithcaption />
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Carousel #3 </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-2 pb-2">Ex.
                                                <pre><code className="text-danger"><br />
                                                    &nbsp;&lt;section className="bg-half-260 d-table w-100" id="home"&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="bg-overlay"&gt;&lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;div className="container"&gt;<br />
                                                    &nbsp;&nbsp;  &lt;div className="row mt-5 justify-content-center"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;div className="col-12"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;div className="title-heading text-center"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;   &lt;h4 className="display-4 fw-bold text-white title-dark mb-3"&gt;Find your perfect property&lt;/h4&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;   &lt;p className="para-desc text-white-50 mb-0 mx-auto"&gt;Launch your campaign and benefit from our expertise on
                                                    designing and managing conversion centered bootstrap v5 html page.&lt;/p&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp;  &lt;/div&gt;<br />
                                                    &nbsp;&nbsp; &lt;/div&gt;<br />
                                                    &nbsp;&lt;/section&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <section className="home-slider position-relative carousel-overlay">
                                                <div>
                                                    <div className="bg-overlay"></div>
                                                    <SlideWithAnimation />
                                                </div>
                                            </section>
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

export default Carousel;