import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDate: [
        { id: 1, date: 'Last Hour', label: 'lasthour' },
        { id: 2, date: 'Last 24 hours', label: 'oneday' },
        { id: 3, date: 'Last 7 days', label: 'sevenday' },
        { id: 4, date: 'Last 14 days', label: 'fourteenhour' },
        { id: 5, date: 'Last 30 days', label: 'onemonth' },
      ],
      JobType: [
        { id: 1, jobType: 'Contract Base', label: 'contract' },
        { id: 2, jobType: 'Freelancer', label: 'freelancer' },
        { id: 3, jobType: 'Full Time', label: 'fulltime' },
        { id: 4, jobType: 'Part Time', label: 'parttime' },
        { id: 5, jobType: 'Remote', label: 'remote' },
        { id: 6, jobType: 'Intership', label: 'intern' },
      ],
      experiance: [
        { id: 1, reqexperiance: 'Fresher', label: 'fresher' },
        { id: 2, reqexperiance: '+1 Year', label: 'oneyear' },
        { id: 3, reqexperiance: '+2 Year', label: 'twoyear' },
        { id: 4, reqexperiance: '+3 Year', label: 'threeyear' },
        { id: 5, reqexperiance: '+5 Year', label: 'fiveyear' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Col lg={4} md={6} xs={12}>
          <div className="sidebar p-4 rounded shadow">
            <div className="widget">
              <form role="search" method="get">
                <div className="input-group mb-3 border rounded">
                  <input
                    type="text"
                    id="s"
                    name="s"
                    className="form-control border-0"
                    placeholder="Search Keywords..."
                  />
                  <button
                    type="submit"
                    className="input-group-text bg-transparent border-0"
                    id="searchsubmit"
                  >
                    <i className="uil uil-search"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="widget mb-4 pb-4 border-bottom">
              <h5 className="widget-title">Categories</h5>
              <div className="mt-4 mb-0">
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                >
                  <option defaultValue>All Jobs</option>
                  <option>Digital & Creative</option>
                  <option>Accountancy</option>
                  <option>Banking</option>
                  <option>IT Contractor</option>
                  <option>Graduate</option>
                  <option>Estate Agency</option>
                </select>
              </div>
            </div>

            <div className="widget mb-4 pb-4 border-bottom">
              <h5 className="widget-title">Date Posted</h5>
              <div className="mt-4">
                {this.state.postDate.map((item, key) => (
                  <div key={key} className="form-check mb-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      type="radio"
                      name="flexRadioDefault"
                      id={item.label}
                    />
                    <label className="form-check-label" htmlFor={item.label}>
                      {item.date}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="widget mb-4 pb-4 border-bottom">
              <h5 className="widget-title">Job Type</h5>
              <div className="mt-4">
                {this.state.JobType.map((item, key) => (
                  <div key={key} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={item.label}
                    />
                    <label className="form-check-label" htmlFor={item.label}>
                      {item.jobType}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="widget">
              <h5 className="widget-title">Experience</h5>
              <div className="mt-4">
                {this.state.experiance.map((item, key) => (
                  <div key={key} className="form-check mb-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      type="radio"
                      name="flexRadioDefault2"
                      id={item.label}
                    />
                    <label className="form-check-label" htmlFor={item.label}>
                      {item.reqexperiance}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Sidebar;
