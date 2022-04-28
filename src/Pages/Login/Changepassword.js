import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState(""); //variable for password
  const [newPassword, setNewPassword] = useState(""); //variable for confirm password
  const [error, setError] = useState({ type: "", message: ""}); //res type and res Error show with loop
  const navigate = useNavigate(); //navigate to next step
  const {
    formState: { errors },
  } = useForm(); //form Input using useform
  const handleForm = (e) => {
    e.preventDefault();
    if (oldPassword === newPassword) {
      setError({ type: "success", message: `Password Changed Succesfully` });
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 5000);
      return () => clearTimeout(timeout);
    } else {
      setError({ type: "error", message: `Please Try Again` });
    }
  }; //fuction for form submit
  return (
    <>
      <div className="LoginSection">
        <Container className="LoginContainer">
          <Row className="LoginRow">
            <Col lg={12} className="LoginCol">
              <Row className="RegisterFormRow">
                <Col className="LoginFormCol">
                  <img src={Logo} className="Logoimg" alt="Logo"></img>
                  <Form className="LoginForm" onSubmit={handleForm}>
                    <h1
                      className="d-flex justify-content-start text-uppercase"
                      style={{ color: "#B575D8" }}
                    >
                      Change Password
                    </h1>
                    {error.type !== "" && 
                      <div className={ error.type === "success" ? "succesdiv" : "errordiv"}>
                        <strong>{error.message}</strong>
                      </div>
                    }
                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex justify-content-start">
                        New Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="FormInput"
                        name="oldPassword"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <span className="FormError d-flex justify-content-start">
                        {errors.oldPassword && "Password is required!"}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex justify-content-start">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="FormInput"
                        name="newPassword"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <span className="FormError d-flex justify-content-start">
                        {errors.newPassword && "Password is required!"}
                      </span>
                    </Form.Group>
                    <div className="LoginButtonDiv">
                      <Button
                        className="SubmitBtn Register"
                        type="submit"
                        style={{ width: "120px" }}
                      >
                        Confirm
                      </Button>
                      <div className="text-center py-2 px-5">
                        <span className="LeftRight px-2">
                          <FaHandPointLeft
                            style={{ color: "#B575D8", fontWeight: "700" }}
                          />
                        </span>
                        <Link
                          to="/login"
                          className="LeftRight"
                          style={{
                            textDecoration: "none",
                            color: "#B575D8",
                            fontWeight: "700",
                          }}
                        >
                          Go To Login
                        </Link>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Changepassword;
