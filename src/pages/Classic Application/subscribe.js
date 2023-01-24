import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "reactstrap";

//Import Images
import imgbg from "../../assets/images/app/classic05.png";

const Subscribe = () => {  
    return (
      <React.Fragment>
        <section className="section bg-primary bg-gradient">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container className="position-relative">
            <Row>
              <Col lg={5} md={6}>
                <div className="app-subscribe text-center text-md-start">
                  <img src={imgbg} className="img-fluid" alt="" />
                </div>
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title text-center text-md-start">
                  <h1 className="title text-white title-dark mb-2">
                    Subscribe to our weekly news
                  </h1>
                  <p className="text-white-50 para-dark">
                    Sign up and receive the latest tips via email.
                  </p>
                </div>
                <div className="subcribe-form mt-4 pt-2">                  
                  <Form className="ms-0">
                    <div className="mb-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="rounded-pill"
                        placeholder="E-mail :"
                        required
                      />
                      <Button
                        type="submit"
                        color="primary"
                        className="btn-pills"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
}

export default Subscribe;
