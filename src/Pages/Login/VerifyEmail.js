import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link, Route, Routes} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Changepassword from './Changepassword';
const VerifyEmail = () => {
  const navigate = useNavigate(); //navigate to next step
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //form Input using useform
  const onSubmit = (data) => {
     navigate("/changepassword");
    swal({
        position: 'centerd',
        title: 'Your Email Verification Link Send on Email Succesful...',
        showConfirmButton: false,
        timer: 5000
    })
  }; //fuction for form submit
  return (
    <>
      <div>
        <Routes>
          <Route path="/changepassword" element={<Changepassword />} />
        </Routes>
      </div>
      <div className="LoginSection">
        <Container className="LoginContainer">
          <Row className="LoginRow">
            <Col lg={12} className="LoginCol">
              <Row className="RegisterFormRow">
                <Col className="LoginFormCol">
                  <img src={Logo} className="Logoimg" alt="Logo"></img>
                  <Form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1
                      className="d-flex justify-content-start text-uppercase"
                      style={{ color: "#B575D8" }}
                    >
                      Verify Email
                    </h1>
                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex justify-content-start">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className="FormInput"
                        name="email"
                        {...register("email", { required: true })}
                      />
                      <span className="FormError d-flex justify-content-start">
                        {errors.email && "email is required!"}
                      </span>
                    </Form.Group>
                    <div className="LoginButtonDiv">
                      <Button
                        className="SubmitBtn Register"
                        type="submit"
                        style={{ width: "200px"}}
                      >
                       <Link to="/changepassword" style={{textDecoratin:"none",color:"#fff"}}>Verify</Link>
                      </Button>
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

export default VerifyEmail;
