import React, { useEffect } from "react";
import { Button, Col, Form, Input, message, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API } from "../global";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch({ type: "showLoading" });
    axios
      .post(
        `${API}/users/login`,
        values
      )
      .then((res) => {
        dispatch({ type: "hideLoading" });
        message.success("Login Successful");
        localStorage.setItem("user_data", JSON.stringify(res.data));
        // console.log(localStorage.getItem("user_data"));
        navigate("/home");
      })
      .catch(() => {
        dispatch({ type: "hideLoading" });
        message.error("Something went wrong");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user_data"))
      // console.log(localStorage.getItem("user_data"));
      navigate("/home");
  }, []);

  return (
    <div>
      <div className="authentication">
        <Row>
          <Col lg={8} xs={22}>
            <Form layout="vertical" onFinish={onFinish}>
              <h1 className="text-center">
                <b>Shop</b>
              </h1>
              <hr />
              <h3>Login</h3>

              <Form.Item name="userId" label="User ID">
                <Input placeholder="admin@gmail.com" id="username" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input type="password" placeholder="123456" id="password" />
              </Form.Item>

              <div className="d-flex justify-content-between align-items-center">
                <Link to="/register">
                  <p>Not Yet Registered ? Click Here To Register</p>
                </Link>
                <Button htmlType="submit" type="primary">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
