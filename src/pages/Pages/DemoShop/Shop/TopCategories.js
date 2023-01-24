import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import fashion from '../../../../assets/images/shop/categories/fashion.jpg';
import sports from '../../../../assets/images/shop/categories/sports.jpg';
import music from '../../../../assets/images/shop/categories/music.jpg';
import furniture from '../../../../assets/images/shop/categories/furniture.jpg';
import electronics from '../../../../assets/images/shop/categories/electronics.jpg';
import mobile from '../../../../assets/images/shop/categories/mobile.jpg';

class TopCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateData: [
        { img: fashion, title: 'Fashion' },
        { img: sports, title: 'Sports' },
        { img: music, title: 'Music' },
        { img: furniture, title: 'Furniture' },
        { img: electronics, title: 'Electronics' },
        { img: mobile, title: 'Mobile' },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row>
            <Col xs={12}>
              <h5 className="mb-0">Top Categories</h5>
            </Col>
          </Row>

          <Row>
            {this.state.cateData.map((item, key) => (
              <Col key={key} lg={2} md={4} xs={6} className="mt-4 pt-2">
                <Card className="features feature-primary explore-feature border-0 rounded text-center">
                  <CardBody>                   
                      <img
                        src={item.img}
                        className="avatar avatar-small rounded-circle shadow-md"
                        alt=""
                      />                  
                    <div className="content mt-3">
                      <h6 className="mb-0">
                        <Link to="#" className="title text-dark">
                          {item.title}
                        </Link>
                      </h6>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default TopCategories;
