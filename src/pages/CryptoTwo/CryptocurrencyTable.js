import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import SectionTitle from '../../components/Shared/SectionTitle'

//import images
import litecoin from '../../assets/images/crypto/litecoin.png';
import bitcoin from '../../assets/images/crypto/bitcoin.png';
import auroracoin from '../../assets/images/crypto/auroracoin.png';
import coinye from '../../assets/images/crypto/coinye.png';
import ethereum from '../../assets/images/crypto/ethereum.png';
import potcoin from '../../assets/images/crypto/potcoin.png';
import zcash from '../../assets/images/crypto/zcash.png';
import primecoin from '../../assets/images/crypto/primecoin.png';
import blocknet from '../../assets/images/crypto/blocknet.png';
import kucoin from '../../assets/images/crypto/kucoin.png';

import { Link } from 'react-router-dom';

const CryptocurrencyTable = () => {
        return (
            <React.Fragment>
                <Container>
                    <SectionTitle
                        title='Latest Cryptocurrency Table'
                        desc="that can provide everything you need to generate awareness, drive traffic, connect."
                    />
                    <Row className="justify-content-center">
                        <Col className="col-12 mt-4 pt-2">
                            <div className="table-responsive shadow rounded-md">
                                <Table className="mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{minWidth: "250px"}}>Name</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width: "150px"}}>Price</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width: "150px"}}>Change(%)</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width: "150px"}}>Change($)</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{width: "150px"}}>Marketcap</th>
                                            <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end" style={{width: "100px"}}>Trade</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={bitcoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Bitcoin <span className="text-muted">BTC</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$34587</td>
                                            <td className="text-danger p-3">-2.5%</td>
                                            <td className="text-danger p-3">-$745</td>
                                            <td className="text-muted p-3">$725,354M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={litecoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Litecoin <span className="text-muted">LTC</span></p>
                                                </div>
                                            </th>
                                            <td className="p-3">$216</td>
                                            <td className="text-success p-3">+.264%</td>
                                            <td className="text-success p-3">+$.264</td>
                                            <td className="text-muted p-3">$11,100M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={auroracoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Auroracoin <span className="text-muted">ARC</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$452</td>
                                            <td className="text-danger p-3">-1.9%</td>
                                            <td className="text-danger p-3">-$1.9</td>
                                            <td className="text-muted p-3">$45,785M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={coinye} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Coinye <span className="text-muted">CNY</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$154</td>
                                            <td className="text-success p-3">+1.05%</td>
                                            <td className="text-success p-3">+$1.05</td>
                                            <td className="text-muted p-3">$85,478M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={ethereum} className="me-3" height="32" alt="" />
                                                    <p className="mt-2 d-inline fw-normal h6">Ethereum Coin <span className="text-muted">ETH</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$854</td>
                                            <td className="text-success p-3">+1.705%</td>
                                            <td className="text-success p-3">+$1.705</td>
                                            <td className="text-muted p-3">$112,452M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={potcoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Potcoin <span className="text-muted">PTC</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$548</td>
                                            <td className="text-danger p-3">-3.2%</td>
                                            <td className="text-danger p-3">-$3.2</td>
                                            <td className="text-muted p-3">$4,712M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={zcash} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Zcash Coin <span className="text-muted">ZCC</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$965</td>
                                            <td className="text-success p-3">+1.465%</td>
                                            <td className="text-success p-3">+$1.465</td>
                                            <td className="text-muted p-3">$487,552M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={primecoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Prime coin <span className="text-muted">XPM</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$4875</td>
                                            <td className="text-danger p-3">-1.08%</td>
                                            <td className="text-danger p-3">-$1.08</td>
                                            <td className="text-muted p-3">$55,221M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={blocknet} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Blocknet <span className="text-muted">BLOCK</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$478</td>
                                            <td className="text-success p-3">+2.8%</td>
                                            <td className="text-success p-3">+$2.8</td>
                                            <td className="text-muted p-3">$66,552M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>

                                        <tr>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <img src={kucoin} className="me-3" height="32" alt="" />
                                                    <p className="mb-0 d-inline fw-normal h6">Kucoin <span className="text-muted">KCS</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">$545</td>
                                            <td className="text-success p-3">+1.5%</td>
                                            <td className="text-success p-3">+$1.5</td>
                                            <td className="text-muted p-3">$98,562M</td>
                                            <td className="p-3 text-end"><Link to="#" className="btn btn-sm btn-primary">Trade</Link></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className="mt-4 pt-2 text-center">
                                <Link to="#" className="text-primary h6">See More <i className="uil uil-angle-right-b align-middle"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );    
};
export default CryptocurrencyTable;
