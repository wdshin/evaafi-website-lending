// React Basic and Bootstrap
import React from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import BlogBox from "../../components/Shared/BlogBox";
import { hotelBlogsData } from "../../common/data";

const News = () => {
  return (
    <React.Fragment>
      <section className="section pt-5 pt-sm-0 pt-md-4 bg-light">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Latest News"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect"
          />

          <Row>
            {/* blog box */}
            <BlogBox blogs={hotelBlogsData} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default News;
