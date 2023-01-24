import React, { useEffect } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Paginations = () => {
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
                title="Pagination"
                breadcrumb="Pagination"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-pagination">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Pagination </h5>
                                        </div>

                                        <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br />
                                                <pre><code className="text-danger"><br />
                                                    &lt;Pagination className="mb-0"&gt;<br />
                                                    &nbsp;&nbsp; &lt;PaginationItem&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;PaginationLink href="#" previous&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;  Prev <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/PaginationLink&gt; <br />
                                                    &nbsp;&nbsp; &lt;/PaginationItem&gt;<br />

                                                    &nbsp;&nbsp; &lt;PaginationItem active&gt; <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;PaginationLink href="#"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  1 <br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/PaginationLink&gt;<br />
                                                    &nbsp;&nbsp; &lt;/PaginationItem&gt;<br />

                                                    &nbsp;&nbsp; &lt;PaginationItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;PaginationLink href="#"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  2<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/PaginationLink&gt;<br />
                                                    &nbsp;&nbsp; &lt;/PaginationItem&gt;<br />

                                                    &nbsp;&nbsp; &lt;PaginationItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;PaginationLink href="#"&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  3<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/PaginationLink&gt;<br />
                                                    &nbsp;&nbsp; &lt;/PaginationItem&gt;<br />

                                                    &nbsp;&nbsp; &lt;PaginationItem&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;PaginationLink href="#" next&gt;<br />
                                                    &nbsp;&nbsp;&nbsp;  Next<br />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/PaginationLink&gt;<br />
                                                    &nbsp;&nbsp; &lt;/PaginationItem&gt;<br />
                                                    &lt;/Pagination&gt;<br />
                                                </code></pre>
                                            </h6>

                                            <Pagination className="pagination mb-0">
                                                <PaginationItem>
                                                    <PaginationLink href="#" previous
                                                    >
                                                        Prev
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="#">
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#" next>
                                                        Next
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
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

export default Paginations;