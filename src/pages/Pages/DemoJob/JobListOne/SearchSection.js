import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class SearchSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="features-absolute">
                                <form className="rounded p-4 mt-4 bg-white shadow">
                                    <Row className="text-start">
                                        <Col lg={5} md={4}>
                                            <div className="mb-0">
                                                <input type="text" className="form-control" required placeholder="Keywords" />
                                            </div>
                                        </Col>

                                        <Col lg={7} md={8}>
                                            <Row className="align-items-center">
                                                <Col md={4} className="mt-4 mt-sm-0">
                                                    <div className="mb-0">
                                                        <select className="form-control form-select">
                                                            <option defaultValue="">Location</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AX">&Aring;land Islands</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                        </select>
                                                    </div>
                                                </Col>

                                                <div className="col-md-4 mt-4 mt-sm-0">
                                                    <div className="mb-0">
                                                        <select className="form-control form-select">
                                                            <option defaultValue="">Job Types</option>
                                                            <option value="4">Accounting</option>
                                                            <option value="1">IT & Software</option>
                                                            <option value="3">Marketing</option>
                                                            <option value="5">Banking</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 mt-4 mt-sm-0">
                                                    <div className="d-grid">
                                                        <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search" />
                                                    </div>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default SearchSection;