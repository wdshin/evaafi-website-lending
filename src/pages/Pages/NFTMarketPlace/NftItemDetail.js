import React, { useState } from 'react';
import {
    Card, CardBody, Container, Row, Col, Form, Input,
    Label, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer3 from "../PageFooterLayouts/Footer3";
import Popup from '../../../components/Layout/popup';

//import Images
import nft05 from '../../../assets/images/nft/5.jpg';
import nft01 from '../../../assets/images/nft/1.jpg';
import nft02 from '../../../assets/images/nft/2.jpg';
import nft03 from '../../../assets/images/nft/3.jpg';
import nft04 from '../../../assets/images/nft/4.jpg';
import client01 from '../../../assets/images/client/01.jpg';
import client02 from '../../../assets/images/client/02.jpg';
import client03 from '../../../assets/images/client/03.jpg';
import client04 from '../../../assets/images/client/04.jpg';

//Import Icons
import FeatherIcon from 'feather-icons-react';
import ThemeSwitcher from '../../../components/Layout/ThemeSwitcher';

const NftItemDetail = () => {
    const [modal, setModal] = useState(false);
    const [succModal, setSuccModal] = useState(false);

    const [buyModal, setBuyModal] = useState(false);
    const [succBuyModal, setSuccBuyModal] = useState(false);

    const nftItemDetailData = [
        {
            id: 1,
            cardImg: nft05,
            badge: 231,
            title: "01 nft title",
            img: client01,
        },
        {
            id: 2,
            cardImg: nft02,
            badge: 232,
            title: "02 nft title",
            img: client02,
        },
        {
            id: 3,
            cardImg: nft03,
            badge: 233,
            title: "03 nft title",
            img: client03,
        },
        {
            id: 4,
            cardImg: nft04,
            badge: 234,
            title: "04 nft title",
            img: client04,
        },
    ];
    return (
        <React.Fragment>
            <NavBar />

            <section className="bg-half-100">
                <Container>
                    <Row className="mt-5">
                        <Col md={6}>
                            <div className="sticky-bar">
                                <img src={nft01} className="img-fluid rounded" alt="" />
                            </div>
                        </Col>

                        <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="nft nft-primary">
                                <h4 className="mb-3">Deep Sea Phantasy</h4>
                                <p className="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>

                                <h5 className="mt-4">Creator:</h5>

                                <div className="d-flex align-items-center mt-3">
                                    <img src={client01} className="avatar avatar-md-sm rounded-pill shadow" alt="" />

                                    <div className="ms-2">
                                        <Link to="#" className="title text-dark h6">Calvin Carlo</Link>
                                    </div>
                                </div>

                                <h5 className="mt-4">Details:</h5>

                                <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>

                                <h5 className="mt-4 text-muted">Bid Price</h5>
                                <h6 className="mb-0">1.252ETH / $4578</h6>

                                <div className="mt-4">
                                    <Link to="#"
                                        className="btn btn-pills btn-primary me-2"
                                        onClick={() => setModal(true)}
                                    >
                                        <i className="mdi mdi-gavel fs-6 me-2"></i> Place a Bid</Link>{" "}
                                    <Link
                                        onClick={() => setBuyModal(true)}
                                        to="#"
                                        className="btn btn-pills btn-primary"
                                    >
                                        <i className="mdi mdi-cart fs-6 me-2"></i> Buy Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row>
                        <Col className="col-12">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="mb-4">Related Items</h4>
                                <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {nftItemDetailData.map((item, key) => (
                            <Col key={key} lg={3} md={4} sm={6} className="col-12 mt-4 pt-2">
                                <Card className="nft nft-item nft-primary rounded shadow overflow-hidden">
                                    <div className="nft-image position-relative overflow-hidden">
                                        <img src={item.cardImg} className="img-fluid item-img" alt="" />
                                        <div className="overlay"></div>
                                        <div className="bid-btn p-3 text-center">
                                            <Link to="/nft-item-detail" className="btn btn-pills"><i className="mdi mdi-gavel fs-6 me-2"></i> Bid</Link>
                                        </div>
                                        <div className="position-absolute top-0 start-0 m-2">
                                            <Link to="#"><img src={item.img} className="avatar avatar-sm-sm rounded-pill shadow-md" alt="" /></Link>
                                        </div>
                                        <div className="position-absolute top-0 end-0 m-2">
                                            <Link to="#" className="badge rounded-md bg-light shadow">
                                                <i className="mdi mdi-heart align-middle text-danger"></i> <span className="text-dark">{item.badge}</span></Link>
                                        </div>
                                    </div>

                                    <CardBody className="p-3">
                                        <Link to="/nft-item-detail" className="h5 title text-dark">#{item.title}</Link>

                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <span className="text-muted">12 in stock</span>
                                            <span className="text-dark">Price: <span className="link">2.333ETH</span></span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


            <Modal
                isOpen={modal}
                toggle={() => {
                    setModal()
                }}
                size="sm"
                id="NftBid"
                centered
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="bidtitle">Place a Bid</h5>
                    <button type="button" onClick={() => setModal(false)} className="btn btn-icon btn-close"
                        data-bs-dismiss="modal" id="close-modal"><i className="uil uil-times fs-4 text-dark"></i></button>
                </div>
                <ModalBody className="p-4">
                    <Form>
                        <Row>
                            <Col className="col-12">
                                <div className="mb-4">
                                    <Label className="form-label fw-bold">Your Bid Price <span className="text-danger">*</span></Label>
                                    <Input name="name" id="name" type="text" className="form-control" placeholder="00.00 ETH" />
                                    <small className="text-muted"><span className="text-dark">Note:</span> Bid price at least 1 ETH</small>
                                </div>
                            </Col>
                            <Col className="col-12">
                                <div className="mb-4">
                                    <Label className="form-label fw-bold">Enter Your QTY <span className="text-danger">*</span></Label>
                                    <Input name="email" id="email" type="email" className="form-control" placeholder="0" />
                                    <small className="text-muted"><span className="text-dark">Note:</span> Max. Qty 5</small>
                                </div>
                            </Col>
                        </Row>
                    </Form>

                    <div className="pt-3 border-top">
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> You must bid at least:</p>
                            <p className="text-primary"> 1.22 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Service free:</p>
                            <p className="text-primary"> 0.05 ETH </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold small"> Total bid amount:</p>
                            <p className="text-primary mb-0"> 1.27 ETH </p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => { setSuccModal(true); setModal(false) }} className="btn btn-pills btn-primary" data-bs-target="#placebid" data-bs-toggle="modal">
                        <i className="mdi mdi-gavel fs-6 me-1"></i> Place a Bid</button>
                </ModalFooter>


            </Modal>
            <Modal
                isOpen={succModal}
                toggle={() => {
                    setSuccModal()
                }}
                size="sm"
                centered
                id="placebid">
                <div className="modal-content border-0 shadow rounded-md">
                    <ModalHeader toggle={() => {
                        setSuccModal()
                    }}>Bidding Successful
                    </ModalHeader>
                    <div className="modal-body p-4">
                        your bid (1.27ETH) has been listing to our database
                    </div>
                    <ModalFooter>
                        <Link to="#" className="btn btn-pills btn-primary"><i className="mdi mdi-basket-plus fs-6 me-1"></i> View Your Bid</Link>
                    </ModalFooter>
                </div>
            </Modal>

            <Modal
                isOpen={buyModal}
                toggle={() => {
                    setBuyModal()
                }}
                size="sm"
                centered
                id="NftBuynow"
            >
                <div className="modal-content border-0 shadow rounded-md">
                    <ModalHeader toggle={() => {
                        setBuyModal()
                    }}
                        className="modal-header" id="buyNft">Checkout
                        <button onClick={() => setBuyModal(false)} type="button" className="btn btn-icon btn-close" data-bs-dismiss="modal" id="close-modal"><i className="uil uil-times fs-4 text-dark"></i></button>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <Form>
                            <Row>
                                <Col className="col-12">
                                    <div className="mb-4">
                                        <Label className="form-label fw-bold">Your Price <span className="text-danger">*</span></Label>
                                        <Input name="name" id="name" type="text" className="form-control" value="1.5ETH" />
                                    </div>
                                </Col>
                            </Row>
                        </Form>

                        <div className="py-3 border-top">
                            <div className="d-flex justify-content-between">
                                <p className="fw-bold small"> You must bid at least:</p>
                                <p className="text-primary"> 1.22 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="fw-bold small"> Service free:</p>
                                <p className="text-primary"> 0.05 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="fw-bold small"> Total bid amount:</p>
                                <p className="text-primary mb-0"> 1.27 ETH </p>
                            </div>
                        </div>

                        <div className="bg-soft-danger p-3 rounded shadow">
                            <div className="d-flex align-items-center">
                                <i className="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                                <div className="flex-1">
                                    <h6 className="mb-0">This creator is not verified</h6>
                                    <small className="mb-0">Purchase this item at your own risk</small>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button onClick={() => { setSuccBuyModal(true); setBuyModal(false) }} className="btn btn-pills btn-primary w-100">
                                <i className="mdi mdi-cart fs-6 me-1"></i> Continue</button>
                            <form>
                                <div className="form-check align-items-center d-flex mt-2">
                                    <Input className="form-check-input mt-0" type="checkbox" value="" id="AcceptT&C" />
                                    <Label className="form-check-label text-muted ms-2" for="AcceptT&C">I Accept
                                        <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </div>
            </Modal>

            <Modal
                isOpen={succBuyModal}
                toggle={() => {
                    setSuccBuyModal()
                }}
                size="sm"
                centered
                id="buyNftSuccess"
            >
                <div className="modal-content border-0 shadow rounded-md">
                    <div className="position-absolute top-0 start-100 translate-middle z-index-1">
                        <button onClick={() => setSuccBuyModal(false)} type="button" className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10" id="close-modal"><i className="uil uil-times fs-4"></i></button>
                    </div>
                    <ModalBody className="text-center p-4">
                        <h3>Yahhhoooo! 🎉</h3>
                        <h6 className="text-muted mb-0">You successfully purchased <Link to="#" className="text-reset"><u>XYZ nft</u></Link> from Landrick</h6>

                        <ul className="rounded-md shadow p-4 border list-unstyled mt-4">
                            <li className="d-flex justify-content-between">
                                <span className="fw-bold me-5">Status:</span>
                                <span className="text-warning">Processing</span>
                            </li>

                            <li className="d-flex justify-content-between mt-2">
                                <span className="fw-bold me-5">Transaction ID:</span>
                                <span className="text-muted">qhut0...hfteh45</span>
                            </li>
                        </ul>

                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item"><Link to="#" className="rounded">
                                <i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i>
                            </Link>
                            </li>
                            <li className="list-inline-item"><Link to="#" className="rounded">
                                <i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i>
                            </Link>
                            </li>
                            <li className="list-inline-item"><Link to="#" className="rounded">
                                <i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i>
                            </Link>
                            </li>
                            <li className="list-inline-item"><Link to="#" className="rounded">
                                <i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i>
                            </Link>
                            </li>
                        </ul>
                    </ModalBody>
                </div>
            </Modal>
            <Footer3 />
            <ThemeSwitcher/>
            <Popup isPopup={true} />
        </React.Fragment>
    );
}

export default NftItemDetail;