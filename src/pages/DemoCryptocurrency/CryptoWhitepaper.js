import React, { Component } from 'react';
import NavBar from './NavBar';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import shape from '../../assets/images/shape02.png';
import bills from '../../assets/images/crypto/bills.svg';
import Footer from './Footer';

class CryptoWhitepaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData1: [
        {
          line: 'Whitepapers explain the purpose and technology behind a project.',
        },
        {
          line: 'They usually provide statistics, diagrams and facts to convince interested investors to purchase the cryptocurrency.',
        },
        {
          line: 'Producing a whitepaper is key a step required for a crypto startup to be considered legitimate and professional, as it helps investors understand how a business is different from rivals in the space.',
        },
        {
          line: 'Whitepapers differ from litepapers, which tend to be shorter, less technical and easier to understand.',
        },
        {
          line: 'One of the most famous cryptocurrency whitepapers is undoubtedly Bitcoin: A Peer-to-Peer Electronic Cash System, which was published by Satoshi Nakamoto in 2008.',
        },
      ],

      listData2: [
        {
          line: 'A peer-to-peer (P2P) system for payments across an online network',
        },
        {
          line: 'Removing third parties and replacing them with verification (decentralization)',
        },
        { line: 'Transactions would be irreversible' },
        {
          line: 'A P2P distributed timestamp server. This would generate mathematical proof of an order of different transactions.',
        },
      ],

      tagData: [
        { title: 'Circulating Supply' },
        { title: 'Currency' },
        { title: 'Digital Art' },
        { title: 'All-Time-High (ATH)' },
        { title: 'Immutable' },
        { title: 'Futures' },
        { title: 'Contract Account' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="bg-half-170 bg-light d-table w-100"
          style={{ background: `url(${shape}) top left` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0">Whitepapers</h4>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Landrick</Link>
                  </li>{" "}
                  <li className="breadcrumb-item">
                    <Link to="/index-crypto">Crypto</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    Whitepapers
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row>
              <Col lg={7} md={6}>
                <div className="section-title">
                  <h4 className="mb-4">What Is a White Paper?</h4>
                  <ul className="list-unstyled mb-5">
                    {this.state.listData1.map((item, key) => (
                      <li key={key} className="d-flex text-muted mt-2">
                        <i className="uil uil-arrow-right text-primary h5 mb-0 me-2"></i>
                        {item.line}
                      </li>
                    ))}
                  </ul>

                  <h5 className="mb-4">
                    The Bitcoin whitepaper proposed the following:
                  </h5>

                  <ul className="list-unstyled mb-0">
                    {this.state.listData2.map((item, key) => (
                      <li key={key} className="d-flex text-muted mt-2">
                        <i className="uil uil-arrow-right text-primary h5 mb-0 me-2"></i>
                        {item.line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <Link to="#" className="btn btn-soft-primary">
                    Download
                  </Link>
                </div>
              </Col>

              <div className="col-lg-4 offset-lg-1 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="p-4 shadow rounded bg-black">
                  <img src={bills} className="img-fluid" alt="" />
                  <h4 className="text-white title-dark mb-3 mt-4">
                    Terms & Conditions
                  </h4>
                  <p className="text-muted mb-0">
                    A document released by a crypto project that gives investors
                    technical information about its concept, and a roadmap for
                    how it plans to grow and succeed.
                  </p>
                </div>

                <div className="tagcloud mt-4">
                  <h5 className="mb-4">Related Terms & Conditions</h5>

                  {this.state.tagData.map((item, key) => (
                    <Link key={key} to="#" className="rounded">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </Row>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12}>
                <div className="section-title text-center">
                  <h4 className="title mb-4">
                    Be the first to know about Crypto news everyday
                  </h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Get crypto analysis, news and updates right to your inbox!
                    Sign up here so you don't miss a single newsletter.
                  </p>

                  <div className="subcribe-form mt-5">
                    <form>
                      <div className="mb-2">
                        <input
                          type="email"
                          id="email2"
                          name="email"
                          className="rounded-pill border"
                          placeholder="E-mail :"
                        />
                        <button
                          type="submit"
                          className="btn btn-pills btn-primary"
                        >
                          Notify Me
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default CryptoWhitepaper;
