// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import ServiceBox from "./service-box";


class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { icon: 'uil uil-wifi h2 text-primary', title: "Fast Internet" },
        { icon: 'uil uil-print h2 text-primary', title: "Printer & Fax" },
        { icon: 'uil uil-restaurant h2 text-primary', title: "Modern Kitchen" },
        { icon: 'uil uil-clock h2 text-primary', title: "24 Hr Access" },
        { icon: 'uil uil-envelope-alt h2 text-primary', title: "Mail Service" },
        { icon: 'uil uil-calendar-alt h2 text-primary', title: "Events Space" },
        { icon: 'uil uil-user-arrows h2 text-primary', title: "Conference Rooms" },
        { icon: 'uil uil-coffee h2 text-primary', title: "Organic Tea & Coffee" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <Row className="row justify-content-center">
              <Col className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Your Comfort is Our Priority</h4>
                  <p className="text-muted para-desc mx-auto mb-0">Start working with 
                  <span className="text-primary fw-bold">{" "}Landrick</span> that can provide everything you need to generate awareness, 
                  drive traffic, connect.</p>
                </div>
              </Col>
            </Row>

            <Row>
              {/* services box */}
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Service;
