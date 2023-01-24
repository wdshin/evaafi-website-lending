// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domainPriceData: [
        { title: '.in', price: '$4.99' },
        { title: '.com', price: '$5.99' },
        { title: '.org', price: '$6.99' },
        { title: '.net', price: '$7.99' },
        { title: '.info', price: '$3.99' },
        { title: '.me', price: '$2.99' },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section-two bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                <Form className="card p-4 shadow rounded">
                  <h4 className="mb-3">Search Your Domain Now</h4>
                  <Row>
                    <Col xs="12">
                      <div className="input-group mb-3">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control rounded-left"
                          placeholder="Your domain name :"
                        />
                        <div className="input-group-append" id="button-addon4">
                          <select
                            className="form-control rounded-0"
                            id="domain_list"
                          >
                            <option>.in</option>
                            <option>.com</option>
                            <option>.org</option>
                            <option>.net</option>
                            <option>.info</option>
                            <option>.me</option>
                          </select>
                        </div>
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          className="searchbtn btn btn-primary"
                          value="Search"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    {this.state.domainPriceData.map((item, key) => (
                      <Col key={key} lg="2" md="4" xs="6" className="mt-2">
                        <Link to="#" className="text-dark">
                          <div className="rounded shadow p-1 text-center">
                            <h6 className="mb-0">
                              {item.title} <br />
                              <span className="text-primary">{item.price}</span>
                              /year
                            </h6>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Search;
