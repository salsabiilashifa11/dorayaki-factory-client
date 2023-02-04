import React, { useState } from "react";
import { Button, Container, Card, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router";
import AuthService from '../services/auth.service';

export default function Login({ setToken }) {

  document.title = 'Login - Doraemonangis';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email !== '' && password !== '';
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await AuthService.login(email, password);
    console.log(res);

    if (res.status === 200) {
      setEmail(res.data.user.email);
      setPassword(res.data.user.password);
      setToken(res.data.token);
      window.location.replace('/');
    } else {
      alert('Wrong username or password');
    }
  }

    return (
      <Container>
        <Card className="login-form">
          <h1 className="centered resep-judul mb-3">Login</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel 
              controlId="floatingPassword" 
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </FloatingLabel>
            <Row auto={2}>
              <Col xs="auto">
                <Button className="login-button" type="submit" disabled={!validateForm()}>
                  Login
                </Button>
              </Col>
              <Col className="resep-button pt-2">
                <a href="/signup">Don't have an account?</a>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
        
    )
}