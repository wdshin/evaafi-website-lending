import React from 'react';
import { Container, Row, Col } from 'reactstrap';

//import Iamges
import svgMap from "../../../assets/images/svg-map.svg";
import logistics01 from "../../../assets/images/logistics/01.jpg";

const CTA = () => {
    return (
        <React.Fragment>
            <Container fluid className="mt-100 mt-60">
                <div className="py-5" style={{background: `url(${svgMap})`}}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="col-12 text-center">
                                <span className="clip-text clip-text-image text-uppercase fw-bold" 
                                style={{backgroundImage: `url(${logistics01})`}}>Landrick.</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default CTA;