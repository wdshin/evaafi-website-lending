import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Images
import fea1 from '../../../../assets/images/shop/fea1.jpg';
import fea2 from '../../../../assets/images/shop/fea2.jpg';
import fea3 from '../../../../assets/images/shop/fea3.jpg';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [{ img: fea1 }, { img: fea2 }, { img: fea3 }],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid className="mt-4">
          <Row>
            {this.state.cardData.map((item, key) => (
              <Col key={key} md={4} className="mt-4 pt-2">
                <Card className="shop-features border-0 rounded overflow-hidden">
                  <img src={item.img} className="img-fluid" alt="" />
                  <div className="category-title ms-md-4 ms-2">
                    <h4>
                      Summer <br /> Collection
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
      </React.Fragment>
    );
  }
}

export default Collection;
