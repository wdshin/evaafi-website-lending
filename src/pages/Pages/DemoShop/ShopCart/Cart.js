import React, { Component } from "react";
import { Container, Row, Col, Table, Input } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import product1 from "../../../../assets/images/shop/product/s1.jpg";
import product3 from "../../../../assets/images/shop/product/s3.jpg";
import product6 from "../../../../assets/images/shop/product/s6.jpg";
import product10 from "../../../../assets/images/shop/product/s10.jpg";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, image: product1, name: "T-Shirt", price: 255.00, qty: 2 },
                { id: 2, image: product3, name: "Branded Watch", price: 520.00, qty: 1 },
                { id: 3, image: product6, name: "T-Shirt", price: 160.00, qty: 4 },
                { id: 4, image: product10, name: "Sunglasses", price: 260.00, qty: 2 },
            ],
        };
        this.addItem.bind(this);
        this.removeItem.bind(this);
        this.removeCartItem.bind(this);
    }

    removeCartItem = (itemId) => {
        let items = this.state.items;

        var filtered = items.filter(function (item) {
            return item.id !== itemId;
        });

        this.setState({ items: filtered });
    };

    addItem = (itemId) => {
        var newItems = this.state.items;
        newItems.map((item, key) =>
            item.id === itemId ? (item.qty = item.qty + 1) : false
        );
        this.setState({ items: newItems });
    };

    removeItem = (itemId) => {
        var newItems = this.state.items;
        newItems.map(
            (item, key) => {
                if (item.id === itemId && item.qty > 0) {
                    return (item.qty = item.qty - 1);
                } else {
                    return false;
                }
            }
            // item.id === itemId ? (item.qty = item.qty - 1) : false
        );
        this.setState({ items: newItems });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <Col className="col-12">
                                <div className="table-responsive bg-white shadow rounded">
                                    <Table className="mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom py-3" style={{ minWidth: "20px" }}></th>
                                                <th className="border-bottom text-start py-3" style={{ minWidth: "300px" }}>
                                                    Product
                                                </th>
                                                <th
                                                    className="border-bottom text-center py-3"
                                                    style={{ minWidth: "160px" }}
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    className="border-bottom text-center py-3"
                                                    style={{ minWidth: "160px" }}
                                                >
                                                    Qty
                                                </th>
                                                <th
                                                    className="border-bottom text-end py-3 pe-4"
                                                    style={{ minWidth: "160px" }}
                                                >
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.items.map((item, key) => (
                                                <tr key={key} className="shop-list">
                                                    <td className="h6 text-cente">
                                                        <Link
                                                            to="#"
                                                            onClick={() => this.removeCartItem(item.id)}
                                                            className="text-danger"
                                                        >
                                                            X
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={item.image}
                                                                className="img-fluid avatar avatar-small rounded shadow"
                                                                style={{ height: "auto" }}
                                                                alt=""
                                                            />
                                                            <h6 className="mb-0 ms-3">{item.name}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">$ {item.price}.00</td>
                                                    <td className="text-center qty-icons">
                                                        <Input
                                                            type="button"
                                                            value="-"
                                                            onClick={() => this.removeItem(item.id)}
                                                            className="btn btn-icon btn-soft-primary minus"
                                                            readOnly
                                                        />{" "}
                                                        <Input
                                                            type="text"
                                                            step="1"
                                                            min="1"
                                                            name="quantity"
                                                            value={item.qty}
                                                            title="Qty"
                                                            readOnly
                                                            className="btn btn-icon btn-soft-primary qty-btn quantity"
                                                            color="primary"
                                                        />{" "}
                                                        <Input
                                                            type="button"
                                                            value="+"
                                                            onClick={() => this.addItem(item.id)}
                                                            readOnly
                                                            className="btn btn-icon btn-soft-primary plus"
                                                        />
                                                    </td>
                                                    <td className="text-end fw-bold pe-4">
                                                        ${item.qty * item.price}.00
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} md={6} className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">
                                    Shop More
                                </Link>{" "}
                                <Link to="#" className="btn btn-soft-primary ms-2">
                                    Update Cart
                                </Link>
                            </Col>
                            <Col lg={4} md={6} className="ms-auto mt-4 pt-2">
                                <div className="table-responsive bg-white rounded shadow">
                                    <Table className="table-center table-padding mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="h6 ps-4 py-3">Subtotal</td>
                                                <td className="text-end fw-bold pe-4">$ 2190</td>
                                            </tr>
                                            <tr>
                                                <td className="h6 ps-4 py-3">Taxes</td>
                                                <td className="text-end fw-bold pe-4">$ 219</td>
                                            </tr>
                                            <tr className="bg-light">
                                                <td className="h6 ps-4 py-3">Total</td>
                                                <td className="text-end fw-bold pe-4">$ 2409</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="mt-4 pt-2 text-end">
                                    <Link to="shop-checkouts" className="btn btn-primary">
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Cart;