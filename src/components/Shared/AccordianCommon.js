import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

class AccordianCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col1}
            className={
              this.state.col1
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question1}
                <i
                  className={
                    this.state.col1
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col1}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer1}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col2}
            className={
              this.state.col2
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingTwo">
              <h6 className="title mb-0">
                {this.props.question2}
                <i
                  className={
                    this.state.col2
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col2}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer2}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col3}
            className={
              this.state.col3
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question3}
                <i
                  className={
                    this.state.col3
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col3}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer3}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col4}
            className={
              this.state.col4
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question4}
                <i
                  className={
                    this.state.col4
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col4}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer4}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-0 shadow">
          <Link
            to="#"
            onClick={this.t_col5}
            className={
              this.state.col5
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {' '}
                {this.props.question5}
                <i
                  className={
                    this.state.col5
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col5}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer5}</p>
            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export default AccordianCommon;

class AccordianCommon1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
    this.t_col5 = this.t_col5.bind(this);
    this.t_col6 = this.t_col6.bind(this);
    this.t_col7 = this.t_col7.bind(this);
    this.t_col8 = this.t_col8.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
      col5: false,
      col6: false,
      col7: false,
      col8: false,
    });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col6: false,
      col7: false,
      col8: false,
    });
  }
  t_col6() {
    this.setState({
      col6: !this.state.col6,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col5: false,
      col7: false,
      col8: false,
    });
  }
  t_col7() {
    this.setState({
      col7: !this.state.col7,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col5: false,
      col6: false,
      col8: false,
    });
  }
  t_col8() {
    this.setState({
      col8: !this.state.col8,
      col2: false,
      col3: false,
      col1: false,
      col4: false,
      col5: false,
      col6: false,
      col7: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col1}
            className={
              this.state.col1
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question1}
                <i
                  className={
                    this.state.col1
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col1}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer1}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col2}
            className={
              this.state.col2
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingTwo">
              <h6 className="title mb-0">
                {this.props.question2}
                <i
                  className={
                    this.state.col2
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col2}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer2}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col3}
            className={
              this.state.col3
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question3}
                <i
                  className={
                    this.state.col3
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col3}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer3}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col4}
            className={
              this.state.col4
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question4}
                <i
                  className={
                    this.state.col4
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col4}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer4}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col5}
            className={
              this.state.col5
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {' '}
                {this.props.question5}
                <i
                  className={
                    this.state.col5
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col5}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer5}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col6}
            className={
              this.state.col6
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question6}
                <i
                  className={
                    this.state.col6
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col6}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer6}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col7}
            className={
              this.state.col7
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question7}
                <i
                  className={
                    this.state.col7
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col7}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer7}</p>
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col8}
            className={
              this.state.col8
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question8}
                <i
                  className={
                    this.state.col8
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col8}>
            <CardBody>
              <p className="text-muted mb-0 faq-ans">{this.props.answer8}</p>
            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}



class AccordianCommon2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false,
    });
  }
  render() {
    return (

      <React.Fragment>
  <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col1}
            className={
              this.state.col1
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingOne">
              <h6 className="title mb-0">
                {' '}
                {this.props.question1}
                <i
                  className={
                    this.state.col1
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col1}>
            <CardBody>

            {["CentOS 6/CentOS 7/Ubuntu 16.04/Fedora 23/Debian 8","Multiple locations","Private Network","Quick VNC access","rDNS support"].map((item,key)=>(<p key={key} className="text-muted my-2 faq-ans">
              
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle fea icon-ex-md text-primary me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>

            {item}</p>))}
            
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col2}
            className={
              this.state.col2
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingTwo">
              <h6 className="title mb-0">
                {this.props.question2}
                <i
                  className={
                    this.state.col2
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col2}>
            <CardBody>

            {["Top notch network built with Tier 1 ISPs","SSD Storage","Tier IV Data Center","Neustar’s DDoS protection","Backed by Juniper Networks"].map((item,key)=>(<p key={key} className="text-muted my-2 faq-ans">
              
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle fea icon-ex-md text-primary me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>

            {item}</p>))}

            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link
            to="#"
            onClick={this.t_col3}
            className={
              this.state.col3
                ? 'faq position-relative text-primary'
                : 'faq position-relative text-dark'
            }
          >
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question3}
                <i
                  className={
                    this.state.col3
                      ? 'mdi mdi-chevron-up float-end'
                      : 'mdi mdi-chevron-down float-end'
                  }
                ></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col3}>
            <CardBody>
            {["cPanel (only with CentOS 7)","Plesk Onyx","WHMCS","SAN Storage","CDN"].map((item,key)=>(<p key={key} className="text-muted my-2 faq-ans">
              
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle fea icon-ex-md text-primary me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>

            {item}</p>))}
            </CardBody>
          </Collapse>
        </Card>

        <Card className="border-0 rounded mb-2 shadow">
          <Link to="#"onClick={this.t_col4}className={this.state.col4? 'faq position-relative text-primary': 'faq position-relative text-dark'}>
            <CardHeader className="border-0 bg-light p-3" id="headingfive">
              <h6 className="title mb-0">
                {this.props.question4}
                <i className={this.state.col4? 'mdi mdi-chevron-up float-end': 'mdi mdi-chevron-down float-end'}></i>
              </h6>
            </CardHeader>
          </Link>
          <Collapse isOpen={this.state.col4}>

            <CardBody>

            {["Free cPanel Migrations","Plesk Migrations","Boot, Login, Network, Hardware, Rebuild","Basic server optimisation, patching & hardening","Basic setup of Applications & Firewall"].map((item,key)=>(<p key={key} className="text-muted my-2 faq-ans">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle fea icon-ex-md text-primary me-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>

            {item}</p>))}

            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export { AccordianCommon1 ,AccordianCommon2 }