import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import { FaHandPointRight, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate(); //navigate to next step
  const [error, setError] = useState({ type: "", message: "" }); //res type and res Error show with loop
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); //form Input using useform
  const onSubmit = (data) => {
    // localStorage.setItem("username", JSON.stringify(data.username));
    localStorage.removeItem("username", JSON.stringify(data.username));
    axios
      .post(`https://lt-hrm.herokuapp.com/api/v1/2022/user/login`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        if (res.status === 200 || res.message === "Login Succesful") {
          setError({ type: "success", message: `${res.data.message}` });
          // window.location.reload(false)
          const timeout = setTimeout(() => {
            navigate("/campaign-details");
          }, 2000);
          return () => clearTimeout(timeout);
        } else if (res.status === 201 || res.statusText === "Created") {
          setError({ message: `${res.data.message}`, type: "error" });
          const timeout = setTimeout(() => {
            setError({ type: "", message: "" });
          }, 3000);
          return () => clearTimeout(timeout);
        } else {
        }
        reset();
      });
  }; //fuction for form submit
  return (
    <>
      <Helmet>
        <title>Dialer | Login</title>
      </Helmet>

      <div className="LoginSection">
        <Container className="LoginContainer">
          <Row className="LoginRow">
            <Col lg={12} className="LoginCol">
              <Row className="LoginFormRow">
                <Col className="LoginFormCol">
                  <img src={Logo} className="Logoimg" alt="Logo"></img>
                  <Form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1
                      className="d-flex justify-content-start text-uppercase"
                      style={{ color: "#B575D8" }}
                    >
                      Login
                    </h1>
                    {error.type !== "" && 
                      <div className={ error.type === "success" ? "succesdiv" : "errordiv"}>
                        <strong>{error.message}</strong>
                      </div>
                    }
                    {/*----------------- username ---------------*/}
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label className="d-flex justify-content-start">
                        Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="FormInput"
                        name="username"
                        {...register("username", { required: true })}
                      />
                      <span className="FormError d-flex justify-content-start">
                        {errors.username && "username is required!"}
                      </span>
                    </Form.Group>
                    {/*----------------- password ---------------*/}
                    <Form.Group className="mb-3">
                      <Form.Label className="d-flex justify-content-start">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="FormInput"
                        name="password"
                        {...register("password", { required: true })}
                      />
                      <span className="FormError d-flex justify-content-start">
                        {errors.password && "password is required!"}
                      </span>
                    </Form.Group>
                    {/*----------------- submit button ---------------*/}
                    <div className="LoginButtonDiv py-2">
                      <Button className="SubmitBtn button" type="submit">
                        <p className="btnLogin">
                          Login <FaSignInAlt style={{ color: "#fff" }} />
                        </p>
                        <div className="btnGo" type="submit">
                          <p className="btnTextGo">Go!</p>
                        </div>
                      </Button>
                      {/*----------------- change passwordS ---------------*/}
                      <div className="text-center pt-2 px-5">
                        <span className="LeftRight px-2">
                          <FaHandPointRight
                            style={{ color: "#B575D8", fontWeight: "700" }}
                          />
                        </span>
                        <Link
                          to="/verifyemail"
                          className="LeftRight"
                          style={{
                            textDecoration: "none",
                            color: "#B575D8",
                            fontWeight: "700",
                          }}
                        >
                          Change Password
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
export default Login;
