// React Basic and Bootstrap
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Button,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ProcessBox from "../../components/Shared/ProcessBox";
import { studioProcessesData } from "../../common/data";

// Import images
import img1 from "../../assets/images/work/1.jpg";
import img2 from "../../assets/images/work/2.jpg";
import img3 from "../../assets/images/work/3.jpg";
import img4 from "../../assets/images/work/4.jpg";
import img5 from "../../assets/images/work/5.jpg";
import img6 from "../../assets/images/work/6.jpg";

const WorkProcess = () => {
  const studioWorksData = [
    { imageUrl: img1, title: "Iphone mockup", subtitle: "Branding" },
    { imageUrl: img2, title: "Mockup Collection", subtitle: "Mockup" },
    { imageUrl: img3, title: "Abstract images", subtitle: "Abstract" },
    { imageUrl: img4, title: "Yellow bg with Books", subtitle: "Books" },
    { imageUrl: img5, title: "Company V-card", subtitle: "V-card" },
    {
      imageUrl: img6,
      title: "Mockup box with paints",
      subtitle: "Photography",
    },
  ];

  const [modal, setModal] = useState(false);
  function tog_modal() {
    setModal(!modal)
  }

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          {/* section title */}
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Work Process</h4>
                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* process box */}
            <ProcessBox processes={studioProcessesData} />
          </Row>
        </Container>

        <Container className="mt-100 pt-50">
          {/* section title */}
          <SectionTitle
            title="Our Latest Projects"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row>
            {studioWorksData.map((work, key) => (
              <Col md={6} key={key} className="col-12 mt-4 pt-2">
                <Card className="border-0 work-container work-primary work-classic">
                  <CardBody className="p-0">
                    <Link to="/portfolio-detail-one">
                      <img
                        src={work.imageUrl}
                        className="img-fluid rounded work-image"
                        alt="work"
                      />
                    </Link>
                    <div className="content pt-3">
                      <h5 className="mb-0">
                        <Link
                          to="/portfolio-detail-one"
                          className="text-dark title"
                        >
                          {work.title}
                        </Link>
                      </h5>
                      <h6 className="text-muted tag mb-0">{work.subtitle}</h6>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center">
            <Col xs="12" className="text-center mt-4 pt-2">
              <Link to="/portfolio-modern-three" className="btn btn-primary">
                See More <i className="uil uil-angle-right align-middle"></i>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs="12" className="text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                  See everything about your workplace
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>

                <div className="mt-3">
                  <Link
                    to="//1.envato.market/landrickreactjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2 me-2"
                  >
                    Buy Now{" "}
                    <span className="badge rounded-pill bg-danger ms-2">v4.2</span>
                  </Link>{" "}
                  <Link
                    to="#"
                    className="btn btn-outline-primary mt-2"
                    onClick={() => tog_modal(false)}
                  >
                    <i className="uil uil-user-check"></i> Free
                    Trial
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        role="dialog"
        isOpen={modal}
        toggle={() => {
          tog_modal()
        }}
        centered
      >
        <ModalHeader>
          15 Days Free Trail
        </ModalHeader>

        <ModalBody>
          <div className="bg-white p-3 rounded box-shadow">
            <Form>
              <Row>
                <Col lg={12}>
                  <div className="">
                    <Label className="form-label">
                      Name : <span className="text-danger">*</span>
                    </Label>
                    <div className="position-relative">
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="">
                    <Label className="form-label">
                      Email : <span className="text-danger">*</span>
                    </Label>
                    <div className="position-relative">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className="">
                    <Label className="form-label">
                      Password : <span className="text-danger">*</span>
                    </Label>
                    <div className="position-relative">
                      <i>
                        <FeatherIcon
                          icon="lock"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        type="password"
                        className="form-control ps-5"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={12} className="mt-2 mb-0">
                  <div className="d-grid">
                    <Button color="primary">
                      Login
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default WorkProcess;
