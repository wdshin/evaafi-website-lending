import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';

//import images
import feal1 from '../../../../assets/images/shop/fea1.jpg';
import feal2 from '../../../../assets/images/shop/fea2.jpg';
import feal3 from '../../../../assets/images/shop/fea4.jpg';

class FeaturedServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceCardData: [
        {
          title: 'Free Shipping',
          icon: 'uil uil-rocket',
        },
        {
          title: '24/7 Support',
          icon: 'uil uil-user-arrows',
        },
        {
          title: 'Payment Process',
          icon: 'uil uil-transaction',
        },
      ],

      collCardData: [
        {
          sec: 6,
          img: feal1,
          title: 'Street style has its own',
          subtitle: 'rules',
        },
        {
          sec: 6,
          img: feal2,
          title: 'Old style in a new',
          subtitle: 'edition',
        },
        {
          sec: 12,
          img: feal3,
          title: 'Summer Collection',
          isClass: true,
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="section-title text-center">
                  <h4 className="title mb-4">
                    Aliquam viverra tellus a urna facilisis bibendum
                  </h4>
                  <p className="text-muted mb-0">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title mb-4">Featured Services</h4>
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
              {this.state.serviceCardData.map((item, key) => (
                <Col md={4} className="mt-4 pt-2" key={key}>
                  <Card className="features feature-clean bg-transparent process-arrow border-0 text-center">
                    <div className="icons text-primary text-center mx-auto">
                      <i className={item.icon + ' d-block rounded h3 mb-0'}></i>
                    </div>

                    <CardBody>
                      <h5 className="text-dark">{item.title}</h5>
                      <p className="text-muted mb-0">
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              {this.state.collCardData.map((item, key) => (
                <Col
                  md={item.sec}
                  key={key}
                  className={item.isClass ? "mt-4 pt-2" : "mt-4 mt-sm-0 pt-2 pt-sm-0"}
                >
                  <Card className="shop-features border-0 rounded overflow-hidden">
                    <img src={item.img} className="img-fluid" alt="" />
                    <div className="category-title ms-md-4 ms-2">
                      <h4>
                        {item.title} <br /> {item.subtitle}
                      </h4>
                      <Link to="#" className="btn btn-sm btn-soft-primary mt-2">
                        Shop Now
                      </Link>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default FeaturedServices;
