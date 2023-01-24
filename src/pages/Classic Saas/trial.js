import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Trial = () => { 
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
            <Row className="align-items-end">
              <Col md={8}>
                <div className="section-title text-md-start text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    Enjoy fully decentralized platform operated by community
                  </h4>
                  <p className="text-white-50 mb-0">
                    Evaa Protocol is brilliant example of community governance.
                  </p>
                </div>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0">
                <div className="text-md-end text-center">
                  <Link to="#" className="btn btn-light">
                    DAO Forum
                    <span className="badge rounded-pill bg-danger ms-2">
                      soon
                    </span>
                  </Link>
               
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );  
}

export default Trial;
