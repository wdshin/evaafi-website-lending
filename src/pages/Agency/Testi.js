// React Basic and Bootstrap
import React from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";
import BlogBox from "../../components/Shared/BlogBox";
import { reviews, agencyBlogsData } from "../../common/data";

const Testi = () => { 
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Client Reviews" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        {/* clients slider */}
                        <ReviewsSlider reviews={reviews} colClass="mt-4" />
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Latest News" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={agencyBlogsData} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );    
}

export default Testi;