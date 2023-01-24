import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import stonfi from "../../assets/images/partners/stonfi.svg";
import tegro from "../../assets/images/partners/tegro.svg";
import ambra from "../../assets/images/partners/ambra.png";
import scale from "../../assets/images/partners/scaleton.png";
import ton from "../../assets/images/partners/ton.png";
import btc from "../../assets/images/partners/btc.png";
import eth from "../../assets/images/partners/eth.png";
import usdc from "../../assets/images/partners/usdc.svg";
import usdt from "../../assets/images/partners/usdt.svg";
import near from "../../assets/images/partners/near.png";



const Partners = () => {
  return (
    <React.Fragment>
      <section className="pt-5">
        <Container>

          <Row className="justify-content-center mt-4">
            <Col className="text-center mt-4 mt-sm-0">
              <img src={btc} className="avatar" alt="" />
            </Col>

            <Col className="text-center mt-4 mt-sm-0">
              <img src={eth} className="avatar" alt="" />
            </Col>

            <Col className="text-center mt-4 mt-sm-0">
              <img src={ton} className="avatar" alt="" />
            </Col>

            <Col className="text-center mt-4 mt-sm-0">
              <img src={usdt} className="avatar" alt="" />
            </Col>

            <Col className="text-center mt-4 mt-sm-0">
              <img src={usdc} className="avatar" alt="" />
            </Col>

            
            
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Partners;

