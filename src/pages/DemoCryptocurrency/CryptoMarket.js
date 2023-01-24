import React from 'react';
import NavBar from './NavBar';
import { Card, Col, Container, Row, Table } from 'reactstrap';
import CryptoChart1 from './Charts/CryptoChart1';
import CryptoChart2 from './Charts/CryptoChart2';
import CryptoChart3 from './Charts/CryptoChart3';
import CryptoChart4 from './Charts/CryptoChart4';

import Footer from './Footer';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import images
import shape from '../../assets/images/shape02.png';
import bitcoin from "../../assets/images/crypto/bitcoin.png";
import ethereum from "../../assets/images/crypto/ethereum.png";
import monero from "../../assets/images/crypto/monero.png";
import litecoin from "../../assets/images/crypto/litecoin.png";
import auroracoin from "../../assets/images/crypto/auroracoin.png";
import coinye from "../../assets/images/crypto/coinye.png";
import potcoin from "../../assets/images/crypto/potcoin.png";
import zcash from "../../assets/images/crypto/zcash.png";
import { Link } from 'react-router-dom';
import primecoin from "../../assets/images/crypto/primecoin.png";
import blocknet from "../../assets/images/crypto/blocknet.png";
import kucoin from "../../assets/images/crypto/kucoin.png";

const CryptoMarket = () => {
    const currencies = [
        {
            id: 1,
            name: "Bitcoin",
            subname: "BTC",
            image: bitcoin,
            price: "34587",
            change: "-2.5%",
            change1: "-$745",
            marketcap: "725,354M",
            link: "#",
        },
        {
            id: 2,
            name: "Litecoin",
            subname: "LTC",
            image: litecoin,
            price: "216",
            change: "+.264%",
            change1: "+$.264",
            marketcap: "11,100M",
            link: "#",
            istextColor: true,
        },
        {
            id: 3,
            name: "Auroracoin",
            subname: "ARC",
            image: auroracoin,
            price: "452",
            change: "-1.9%",
            change1: "-$1.9",
            marketcap: "45,785M",
            link: "#",
        },
        {
            id: 4,
            name: "Coinye",
            subname: "CNY",
            image: coinye,
            price: "154",
            change: "+1.05%",
            change1: "+$1.05",
            marketcap: "85,478M",
            link: "#",
            istextColor: true,
        },
        {
            id: 5,
            name: "Ethereum Coin",
            subname: "ETH",
            image: ethereum,
            price: "854",
            change: "+1.705%",
            change1: "+$1.705",
            marketcap: "112,452M",
            link: "#",
            istextColor: true,
        },
        {
            id: 6,
            name: "Potcoin",
            subname: "PTC",
            image: potcoin,
            price: "548",
            change: "-3.2%",
            change1: "-$3.2",
            marketcap: "4,712M",
            link: "#",
        },
        {
            id: 7,
            name: "Zcash Coin",
            subname: "ZCC",
            image: zcash,
            price: "965",
            change: "+1.465%",
            change1: "+$1.465",
            marketcap: "487,552M",
            link: "#",
            istextColor: true,
        },
        {
            id: 8,
            name: "Prime coin",
            subname: "XPM",
            image: primecoin,
            price: "4875",
            change: "-1.08%",
            change1: "-$1.08",
            marketcap: "55,221M",
            link: "#",
        },
        {
            id: 9,
            name: "Blocknet",
            subname: "BLOCK",
            image: blocknet,
            price: "478",
            change: "+2.8%",
            change1: "+$2.8",
            marketcap: "66,552M",
            link: "#",
            istextColor: true,
        },
        {
            id: 10,
            name: "Kucoin",
            subname: "KCS",
            image: kucoin,
            price: "545",
            change: "+1.5%",
            change1: "+$1.5",
            marketcap: "98,562M",
            link: "#",
            istextColor: true,
        },
    ];
    return (
        <React.Fragment>
            <NavBar />

            <section className="bg-half-170 bg-light d-table w-100"
                style={{ background: `url(${shape}) top left` }}>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col xs={12}>
                            <div className="title-heading text-center">
                                <span className="text-muted">In the past 24 hours</span>
                                <h4 className="mt-2 mb-4">Market is up <span className="text-success">15.78%</span></h4>
                                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="text-center subcribe-form mt-4 pt-2">
                                    <form>
                                        <div className="form-icon position-relative">
                                            <FeatherIcon
                                                icon="search"
                                                className="fea icon-sm icons mt-1"
                                            />
                                            <input type="text" id="text" name="text" className="rounded-pill bg-white-50 form-control ps-5" placeholder="Search assets..." />
                                        </div>
                                        <button type="submit" className="btn btn-pills btn-primary">Search</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="section-title mb-4">
                                <h4>Top Movers</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3} md={6}>
                            <Card className="border-0 p-4 rounded shadow position-relative">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src={bitcoin} className="avatar avatar-coin rounded-pill p-1 bg-success" alt="" />
                                    <span className="text-muted">BTC</span>
                                </div>

                                <h6>Bitcoin</h6>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-success">+15.55%</small>
                                    <small className="text-success">+$ 155</small>
                                    <small>$ 41245</small>
                                </div>

                                <div className="crypto-chart">
                                    <div>
                                        <div id="chart-1">
                                            <CryptoChart1 />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="card border-0 p-4 rounded shadow position-relative">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src={ethereum} className="avatar avatar-coin rounded-pill p-1 bg-danger" alt="" />
                                    <span className="text-muted">ETS</span>
                                </div>

                                <h6>Ethereum</h6>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-danger">-25.01%</small>
                                    <small className="text-danger">-$ 524</small>
                                    <small>$ 1458</small>
                                </div>

                                <div className="crypto-chart">
                                    <div>
                                        <div id="chart-2">
                                            <CryptoChart2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <div className="card border-0 p-4 rounded shadow position-relative">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src={monero} className="avatar avatar-coin rounded-pill p-1 bg-success" alt="" />
                                    <span className="text-muted">XMR</span>
                                </div>

                                <h6>Monero</h6>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-success">+3.08%</small>
                                    <small className="text-success">+$ 58</small>
                                    <small>$ 448</small>
                                </div>

                                <div className="crypto-chart">
                                    <div>
                                        <div id="chart-3">
                                            <CryptoChart3 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <div className="card border-0 p-4 rounded shadow position-relative">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <img src={litecoin} className="avatar avatar-coin rounded-pill p-1 bg-danger" alt="" />
                                    <span className="text-muted">LTC</span>
                                </div>

                                <h6>Litecoin</h6>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-danger">-5.05%</small>
                                    <small className="text-danger">-$ 48</small>
                                    <small>$ 478</small>
                                </div>

                                <div className="crypto-chart">
                                    <div>
                                        <div id="chart-4">
                                            <CryptoChart4 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="col-12 mt-4 pt-2">
                            <div className="table-responsive bg-white shadow rounded">
                                <Table className="table mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ minWidth: "250px" }}>Name</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: "150px" }}>Price</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: "150px" }}>Change(%)</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: "150px" }}>Change($)</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: "150px" }}>Marketcap</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end" style={{ width: "100px" }}>Trade</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {currencies.map((item, key) => (
                                            <tr key={key}>
                                                <th className="p-3">
                                                    <div className="align-items-center">
                                                        <img src={item.image} className="me-3" height="32" alt="" />
                                                        <p className="mb-0 d-inline fw-normal h6">{item.name} <span className="text-muted">{item.subname}</span> </p>
                                                    </div>
                                                </th>
                                                <td className="p-3">${item.price}</td>
                                                <td className={item.istextColor ? "text-success p-3" : "text-danger p-3"}>{item.change}</td>
                                                <td className={item.istextColor ? "text-success p-3" : "text-danger p-3"}>{item.change1}</td>
                                                <td className="text-muted p-3">${item.marketcap}</td>
                                                <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>

                        <Col className="col-12 mt-4 pt-2">
                            <div className="d-md-flex align-items-center text-center justify-content-between">
                                <span className="text-muted me-3">Showing 1 - 15 out of 452</span>
                                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* import Footer */}
            <Footer />
        </React.Fragment>
    );
};

export default CryptoMarket;