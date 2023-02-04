import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { Button, Container, Card, Form, FloatingLabel, Row, Col } from "react-bootstrap";

export default function Login({ setToken }) {

  document.title = 'Sign Up - Doraemonangis';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email !== '' && password !== '';
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await AuthService.register(email, name, password);
    if (res.status === 200) {
      const login = await AuthService.login(email, password);
      if (login.status === 200) {
        setToken(login.data.token);
        window.location.replace('/');
      }else {
        alert('Fail to login')
      }
    }else {
      alert('Email already in use');
    }
  }

  return (
    <Container>
      <Card className="login-form">
        <h1 className="centered resep-judul mb-3">Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingName"
            label="Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel 
            controlId="floatingPassword" 
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </FloatingLabel>
          <Row auto={2}>
            <Col xs="auto">
              <Button className="login-button" type="submit" disabled={!validateForm()}>
                Sign Up
              </Button>
            </Col>
            <Col className="resep-button pt-2">
              <a href="/login">Already have an account?</a>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}
