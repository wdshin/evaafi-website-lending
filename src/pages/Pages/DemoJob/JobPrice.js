import React, { Component } from 'react';
import NavBar from './NavBar';

//import images
import jobBg from '../../../assets/images/job/bg.png';
import amazon from '../../../assets/images/client/amazon.svg';
import google from '../../../assets/images/client/google.svg';
import lenovo from '../../../assets/images/client/lenovo.svg';
import paypal from '../../../assets/images/client/paypal.svg';
import shopify from '../../../assets/images/client/shopify.svg';
import spotify from '../../../assets/images/client/spotify.svg';
import img1 from '../../../assets/images/client/01.jpg';
import img2 from '../../../assets/images/client/02.jpg';
import img3 from '../../../assets/images/client/03.jpg';
import img4 from '../../../assets/images/client/04.jpg';
import img5 from '../../../assets/images/client/05.jpg';
import img6 from '../../../assets/images/client/06.jpg';

import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReviewsSlider from '../../../components/Shared/ReviewsSlider';
import Footer from '../../../components/Layout/Footer';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';
import BackToTop from '../../../components/Layout/backToTop';

class JobPrice extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.querySelectorAll("#buyButton").forEach((navLink) => {
      navLink.classList.add("btn-light")
      navLink.classList.remove("btn-soft-primary");
    });
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector(".shoppingbtn").classList.remove("btn-light");
      document.querySelector(".settingbtn").classList.remove("btn-light");
      document.querySelector(".shoppingbtn").classList.add("btn-primary");
      document.querySelector(".settingbtn").classList.add("btn-soft-primary");
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.querySelector(".shoppingbtn").classList.remove("btn-primary");
      document.querySelector(".settingbtn").classList.remove("btn-soft-primary");
      document.querySelector(".shoppingbtn").classList.add("btn-light");
      document.querySelector(".settingbtn").classList.add("btn-light");
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };


  constructor(props) {
    super(props);
    this.state = {
      monthPricing: [
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
            { id: 3, subItem: '1 Domain Free' },
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
            { id: 2, subItem: 'Enhanced Security' },
            { id: 3, subItem: 'Source Files' },
            { id: 4, subItem: '1 Domain Free' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],

      yearPricing: [
        {
          id: 1,
          price: 10,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 139,
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
          price: 159,
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
          price: 179,
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
      reviews: [
        {
          id: 1,
          img: img1,
          name: 'Thomas Israel',
          post: 'C.E.O',
          desc: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.',
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: 'Barbara McIntosh',
          post: 'M.D',
          desc: 'One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.',
          rating: 4.5,
        },
        {
          id: 3,
          img: img3,
          name: 'Carl Oliver',
          post: 'P.A',
          desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 5,
        },
        {
          id: 4,
          img: img4,
          name: 'Christa Smith',
          post: 'Manager',
          desc: 'According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.',
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: 'Dean Tolle',
          post: 'Developer',
          desc: 'There is now an abundance of readable dummy texts. These are usually used when a text is required.',
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: 'Jill Webb',
          post: 'Designer',
          desc: 'Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.',
          rating: 5,
        },
      ],
      listData1: [
        { id: 1, img: amazon },
        { id: 2, img: google },
        { id: 3, img: lenovo },
        { id: 4, img: paypal },
        { id: 5, img: shopify },
        { id: 6, img: spotify },
      ],
    };
  }

  toggleSwitcher = (checked) => {
    const filtMonthly = document.getElementById('filt-monthly');
    const filtYearly = document.getElementById('filt-yearly');
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');

    if (checked) {
      filtYearly.classList.add('toggler--is-active');
      filtMonthly.classList.remove('toggler--is-active');
      yearly.classList.remove('hide');
      monthly.classList.add('hide');
    } else {
      filtMonthly.classList.add('toggler--is-active');
      filtYearly.classList.remove('toggler--is-active');
      monthly.classList.remove('hide');
      yearly.classList.add('hide');
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section
          className="bg-half-170 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${jobBg})` }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title text-white title-dark mb-0">
                    {' '}
                    Pricing plans
                  </h4>
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
                    <Link to="/index-job">Careers</Link>
                  </li>{" "}
                  <li className="breadcrumb-item active" aria-current="page">
                    Price
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="switcher-pricing d-flex justify-content-center align-items-center mb-4 pb-2">
                  <label
                    className="toggler text-muted toggler--is-active"
                    id="filt-monthly"
                  >
                    Monthly
                  </label>
                  <div className="form-check form-switch mx-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="switcher"
                      onChange={(e) => {
                        this.toggleSwitcher(e.target.checked);
                      }}
                    />
                  </div>
                  <label className="toggler text-muted" id="filt-yearly">
                    Yearly
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <div className="col-12">
                <div id="monthly" className="wrapper-full">
                  <Row>
                    {this.state.monthPricing.map((item, key) => (
                      <div
                        className="col-lg-3 col-md-6 col-12 mt-4 pt-2"
                        key={key}
                      >
                        <div className="card pricing-rates business-rate shadow bg-white border-0 rounded">
                          {item.isBest && (
                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                              <span className="text-center d-block shadow small h6">
                                Best
                              </span>
                            </div>
                          )}

                          <div className="card-body">
                            <h6 className="title fw-bold text-uppercase text-primary mb-4">
                              {item.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {item.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /mo
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {item.isChildItem.map((item, key) => (
                                <li key={key} className="h6 text-muted mb-0">
                                  <span
                                    className="text-primary h5 me-2"
                                  >
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {item.subItem}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                              {item.action}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Row>
                </div>

                <div id="yearly" className="wrapper-full hide">
                  <Row>
                    {this.state.yearPricing.map((item, key) => (
                      <div
                        className="col-lg-3 col-md-6 col-12 mt-4 pt-2"
                        key={key}
                      >
                        <div className="card pricing-rates business-rate shadow bg-white border-0 rounded">
                          {item.isBest && (
                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                              <span className="text-center d-block shadow small h6">
                                Best
                              </span>
                            </div>
                          )}

                          <div className="card-body">
                            <h6 className="title fw-bold text-uppercase text-primary mb-4">
                              {item.title}
                            </h6>
                            <div className="d-flex mb-4">
                              <span className="h4 mb-0 mt-2">$</span>
                              <span className="price h1 mb-0">
                                {item.price}
                              </span>
                              <span className="h4 align-self-end mb-1">
                                /mo
                              </span>
                            </div>

                            <ul className="list-unstyled mb-0 ps-0">
                              {item.isChildItem.map((item, key) => (
                                <li key={key} className="h6 text-muted mb-0">
                                  <span
                                    className="text-primary h5 me-2"
                                  >
                                    <i className="uil uil-check-circle align-middle"></i>
                                  </span>
                                  {item.subItem}
                                </li>
                              ))}
                            </ul>
                            <Link to="#" className="btn btn-primary mt-4">
                              {item.action}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Row>
                </div>
              </div>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Candidates Review</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <ReviewsSlider reviews={this.state.reviews} />
          </Container>
          <Container className="pt-5">
            <Row className="justify-content-center">
              {this.state.listData1.map((item, key) => (
                <Col
                  key={key}
                  lg={2}
                  md={2}
                  xs={6}
                  className="text-center pt-4"
                >
                  <img src={item.img} className="avatar avatar-ex-sm" alt="" />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* import Footer */}
        <Footer />

        <BackToTop />
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default JobPrice;
