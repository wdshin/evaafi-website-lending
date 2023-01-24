import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Container, Row } from 'reactstrap';

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingData: [
        {
          id: 1,
          price: 0,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 39,
          title: 'STARTER',
          action: 'Get Started',
          isBest: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
          ],
        },
        {
          id: 3,
          price: 59,
          title: 'PROFESSIONAL',
          action: 'Try It Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
            { id: 4, subItem: 'Enhanced Security' },
          ],
        },
        {
          id: 4,
          price: 79,
          title: 'ULTIMATE',
          action: 'Started Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
            { id: 4, subItem: 'Enhanced Security' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                {this.props.isTitle && (
                  <h6 className="text-primary">Work Process</h6>
                )}
                <h4 className="title mb-4">
                  {this.props.isTitle
                    ? 'How do we works ?'
                    : 'Comfortable Rates'}
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {this.state.pricingData.map((item, key) => (
              <Col
                key={key}
                lg={3}
                md={6}
                xs={12}
                className="col-12 mt-4 pt-2"
              >
                <div className="card pricing pricing-primary business-rate shadow bg-light border-0 rounded">
                  {item.isBest && (
                    <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                      <span className="text-center d-block shadow small h6">
                        Best
                      </span>
                    </div>
                  )}
                  <CardBody>
                    <h6 className="title name fw-bold text-uppercase mb-4">
                      {item.title}
                    </h6>
                    <div className="d-flex mb-4">
                      <span className="h4 mb-0 mt-2">$</span>
                      <span className="price h1 mb-0">{item.price}</span>
                      <span className="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                      {item.isChildItem.map((item, key) => (
                        <li key={key} className="h6 text-muted mb-0">
                          <span className="text-primary h5 me-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          {item.subItem}
                        </li>
                      ))}
                    </ul>
                    <Link to="#" className="btn btn-primary mt-4">
                      {item.action}
                    </Link>
                  </CardBody>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
