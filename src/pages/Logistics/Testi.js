import React from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import BlogBox from "../../components/Shared/BlogBox";
import { reviews } from '../../common/data';
import { logisticsBlogs } from "../../common/data";

const Testi = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <SectionTitle title="Our Happy Customers"
                        desc=" Start working with that can provide everything you need to generate awareness, drive traffic, connect." />

                    <ReviewsSlider reviews={reviews} colClass="mt-4" />
                </Container>

                <Container className="mt-100 mt-60">
                    <SectionTitle title="Latest News"
                        desc=" Start working with that can provide everything you need to generate awareness, drive traffic, connect." />

                    <Row>
                        <BlogBox blogs={logisticsBlogs} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Testi;