import React from 'react';
import { UncontrolledAlert } from "reactstrap";
import { Link } from 'react-router-dom';

const Popup = () => {
    return (
        <React.Fragment>
            <UncontrolledAlert className="card cookie-popup shadow rounded py-3 px-4">
                <p className="text-muted mb-0 fs-6">This website uses cookies to provide you with a great user experience. By using it,
                    you accept our <Link to="https://themesbrand.com" target="_blank" rel="noopener noreferrer" className="text-success h6">use of cookies</Link></p>
                <div className="cookie-popup-actions text-end">
                    {/* <button>
                        <i className="uil uil-times text-dark fs-4"></i>
                    </button> */}
                </div>
            </UncontrolledAlert>

        </React.Fragment>
    );
}

export default Popup;