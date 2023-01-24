import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { partnersData } from "../../../common/data";

const Partners = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-center">
                    {partnersData.map((item, key) => (
                        <Col key={key} lg={2} md={2} className="col-6 text-center py-4">
                            <img src={item.img} className="avatar avatar-ex-sm" alt="" />
                        </Col>
                    ))}

                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Partners;