import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";

//Import Images
import litecoin from "../../../assets/images/crypto/litecoin.png";
import bitcoin from "../../../assets/images/crypto/bitcoin.png";
import auroracoin from "../../../assets/images/crypto/auroracoin.png";
import coinye from "../../../assets/images/crypto/coinye.png";
import ethereum from "../../../assets/images/crypto/ethereum.png";
import potcoin from "../../../assets/images/crypto/potcoin.png";
import zcash from "../../../assets/images/crypto/zcash.png";
import primecoin from "../../../assets/images/crypto/primecoin.png";
import blocknet from "../../../assets/images/crypto/blocknet.png";
import kucoin from "../../../assets/images/crypto/kucoin.png";

const ListTable = () => {

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
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-12">
                        <div className="table-responsive features-absolute shadow-md rounded-md">
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

                        <div className="text-center mt-4">
                            <Link to="/crypto-market" className="text-muted">View more cryptocurrencies <i className="uil uil-arrow-right align-middle"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}


export default ListTable;
