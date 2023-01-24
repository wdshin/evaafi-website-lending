import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

//import components
import ComponentsSidebar from "./ComponentsSidebar";
import ComponentHeader from "./ComponentHeader";
import ComponentSvg from "./ComponentSvg";

const Tables = () => {
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
                title="Tables"
                breadcrumb="Tables"
            />
            <ComponentSvg
            />
            <section className="section" id="ui-tables">
                <Container>
                    <Row>
                        <ComponentsSidebar />
                        <Col lg={9} md={8} className="col-12">
                            <Row>
                                <Col className="col-12">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Table </h5>
                                        </div>

                                        <div className="p-4">
                                            <div className="table-responsive bg-white shadow rounded">
                                                <Table className="mb-0 table-center">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="border-bottom">#</th>
                                                            <th scope="col" className="border-bottom">First</th>
                                                            <th scope="col" className="border-bottom">Last</th>
                                                            <th scope="col" className="border-bottom">Handle</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Harry</td>
                                                            <td>Potter</td>
                                                            <td>@hpt</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Table Hover </h5>
                                        </div>

                                        <div className="p-4">
                                            <div className="table-responsive bg-white shadow rounded">
                                                <Table className="table-hover mb-0 table-center">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="border-bottom">#</th>
                                                            <th scope="col" className="border-bottom">First</th>
                                                            <th scope="col" className="border-bottom">Last</th>
                                                            <th scope="col" className="border-bottom">Handle</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Harry</td>
                                                            <td>Potter</td>
                                                            <td>@hpt</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="col-12 mt-4 pt-2">
                                    <div className="component-wrapper rounded shadow">
                                        <div className="p-4 border-bottom">
                                            <h5 className="title mb-0"> Table Dark Hover </h5>
                                        </div>

                                        <div className="p-4">
                                            <div className="table-responsive bg-white shadow rounded">
                                                <Table className="table-dark table-hover mb-0 table-center">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="border-bottom">#</th>
                                                            <th scope="col" className="border-bottom">First</th>
                                                            <th scope="col" className="border-bottom">Last</th>
                                                            <th scope="col" className="border-bottom">Handle</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Harry</td>
                                                            <td>Potter</td>
                                                            <td>@hpt</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
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

export default Tables;