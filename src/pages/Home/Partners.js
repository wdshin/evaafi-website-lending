import React from 'react';
import { Container, Row, Col } from 'reactstrap';

//import Images
import amazon from "../../assets/images/client/amazon.svg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";
import shopify from "../../assets/images/client/shopify.svg";
import spotify from "../../assets/images/client/spotify.svg";

const Partners = () => {
    const partnersData = [
        {
            id: 1,
            img: amazon,
        },
        {
            id: 2,
            img: google,
        },
        {
            id: 3,
            img: lenovo,
        },
        {
            id: 4,
            img: paypal,
        },
        {
            id: 5,
            img: shopify,
        },
        {
            id: 6,
            img: spotify,
        },
    ]
    return (
        <React.Fragment>
            <section className="py-4 border-bottom border-top">
                <Container>
                    <Row className="justify-content-center">
                    {partnersData.map((item, key) => (
                        <Col key={key} lg={2} md={2} className="col-6 text-center py-4">
                            <img src={item.img} className="avatar avatar-ex-sm" alt="" />
                        </Col>  
                    ))}                                              
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Partners;