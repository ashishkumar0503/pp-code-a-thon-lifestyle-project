import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const Job = (props) => {
  const [modal, setModal] = useState(false);


  const {
    company,
    contract,
    featured,
    //id,
    languages,
    level,
    location,
    logo,

    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcon(d.default);
    });
    console.log(logoSvg);
  };

  useEffect(() => {
    importSvgs();
    // eslint-disable-next-line
  }, [logo]);

  const notify = () => toast("Submitted Successfully");

  return (
    <div>
      <Modal
        size='lg'
        isOpen={modal}
        toggle={() => setModal(!modal)}
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          Application Form
        </ModalHeader>

        <ModalBody>
          <form>
            <Row>
                <Col lg={8}>
                  <div>
                    <label htmlFor="first name">
                      First Name<span className="text-danger ml-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter first name" required></input>
                  </div>
                </Col>
                <Col lg={8}>
                  <div>
                    <label htmlFor="last name">
                      Last Name<span className="text-danger ml-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter last name" required></input>
                  </div>
                </Col>
                <Col lg={8}>
                  <div>
                    <label htmlFor="email">
                      Email<span className="text-danger ml-1">*</span>
                    </label>
                    <input type="email" className="form-control" placeholder="Enter your email" required></input>
                  </div>
                </Col>
                <Col lg={8}>
                  <div>
                    <label className="font-weight-bold text-small" htmlFor="phone">
                      Phone Number<span className="text-danger ml-1">*</span>
                    </label>
                    <input type="tel" className="form-control" placeholder="Enter your phone number" required></input>
                  </div>
                </Col>
                <Col lg={8}>
                  <div>
                    <label className="font-weight-bold text-small" htmlFor="designation">
                      Designation<span className="text-danger ml-1">*</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Enter your designation" required></input>
                  </div>
                </Col>
            </Row>
          </form>
          <p className="text-success">We will be soon contacting you. Thanks for your patience.</p>
          <button onClick={notify} className="btn btn-primary mt-3" type="submit">Submit</button>
          <ToastContainer/>
        </ModalBody>
      </Modal>
    <div
      className={
        featured ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">{company}</span>
          {props.data.new && <span className="new">new!</span>}
          {props.data.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
        <button onClick={() => setModal(true)} className="btn">Apply Now</button>
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Job;
