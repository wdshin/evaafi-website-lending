import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import client from '../../../assets/images/client/03.jpg';
import blog1 from '../../../assets/images/blog/01.jpg';
import blog2 from '../../../assets/images/blog/02.jpg';
import blog3 from '../../../assets/images/blog/03.jpg';
import { Link } from 'react-router-dom';

class BlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentPostData: [
        {
          img: blog1,
          title: 'Consultant Business',
          date: '15th April 2021',
        },
        {
          img: blog2,
          title: 'Grow Your Business',
          date: '15th April 2021',
        },
        {
          img: blog3,
          title: 'Look On The Glorious Balance',
          date: '15th April 2021',
        },
      ],

      iconListData: [
        { icon: 'facebook' },
        { icon: 'instagram' },
        { icon: 'twitter' },
        { icon: 'linkedin' },
        { icon: 'github' },
        { icon: 'youtube' },
        { icon: 'gitlab' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Col lg={4} md={5} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <Card className="border-0 sidebar sticky-bar ms-lg-4">
            <CardBody className="p-0">
              <div className="text-center">
                <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                  Author
                </span>

                <div className="mt-4">
                  <img
                    src={client}
                    className="img-fluid avatar avatar-medium rounded-pill shadow-md d-block mx-auto"
                    alt=""
                  />

                  <Link
                    to="/blog-about"
                    className="text-primary h5 mt-4 mb-0 d-block"
                  >
                    Cristina Jota
                  </Link>
                  <small className="text-muted d-block">
                    Photographer & Blogger
                  </small>
                </div>
              </div>

              <div className="widget mt-4">
                <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                  Recent Post
                </span>

                <div className="mt-4">
                  {this.state.recentPostData.map((item, key) => (
                    <div key={key} className="d-flex align-items-center mt-3">
                      <img src={item.img} className="avatar avatar-small rounded" style={{ width: "auto" }} alt="" />
                      <div className="flex-1 ms-3">
                        <Link to="#" className="d-block title text-dark">{item.title}</Link>
                        <span className="text-muted">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="widget mt-4">
                <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                  Tagclouds
                </span>

                <div className="tagcloud text-center mt-4">
                  <Link to="#" className="rounded">Business</Link>{" "}
                  <Link to="#" className="rounded">Finance</Link>{" "}
                  <Link to="#" className="rounded">Marketing</Link>{" "}
                  <Link to="#" className="rounded">Fashion</Link>{" "}
                  <Link to="#" className="rounded">Bride</Link>{" "}
                  <Link to="#" className="rounded">Lifestyle</Link>{" "}
                  <Link to="#" className="rounded">Travel</Link>{" "}
                  <Link to="#" className="rounded">Beauty</Link>{" "}
                  <Link to="#" className="rounded">Video</Link>{" "}
                  <Link to="#" className="rounded">Audio</Link>{" "}
                </div>
              </div>

              <div className="widget mt-4">
                <span className="bg-light d-block py-2 rounded shadow text-center h6 mb-0">
                  Social Media
                </span>

                <ul className="list-unstyled social-icon social text-center mb-0 mt-4">
                  {this.state.iconListData.map((item, key) => (
                    <li key={key} className="list-inline-item me-1">
                      <Link to="#" className="rounded">
                        <FeatherIcon
                          icon={item.icon}
                          className="fea icon-sm fea-social"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default BlogSidebar;
