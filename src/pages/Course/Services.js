// React Basic and Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import CourseBox from "./course-box";
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";
import {coursesData, candidatesData} from "../../common/data";

const Services = () => {
    return (
      <React.Fragment>
        <section className="section" id="courses">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Explore Popular Courses"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* coursebox */}
              <CourseBox courses={coursesData} />

              <Col xs={12} className="mt-4 pt-2 text-center">
                <Link to="#" className="btn btn-primary">
                  See More Courses <i className="uil uil-angle-right-b"></i>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60" id="instructors">
            {/* section title */}
            <SectionTitle
              title="Instructors"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={candidatesData} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
};

export default Services;
