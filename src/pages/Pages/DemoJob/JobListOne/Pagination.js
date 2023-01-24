import React, { Component } from 'react';
import { Col, PaginationItem, PaginationLink } from 'reactstrap';

class Pagination extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={12} className="mt-4 pt-2">
                    <ul className="pagination justify-content-center mb-0">
                        <PaginationItem><PaginationLink to="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                        <PaginationItem className="active"><PaginationLink to="#">1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                    </ul>
                </Col>
            </React.Fragment>
        );
    }
}

export default Pagination;