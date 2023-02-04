import React from "react"
import AuthService from "../services/auth.service";
import { Container, Form, FloatingLabel, Card, Button, Row, Col } from "react-bootstrap";

class BahanAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          stock: 0
        }
    }

    componentDidMount() {
        document.title = 'Add Bahan - Doraemonangis';
    }

    async handleSubmit() {
      const res = await AuthService.addIngredients(this.state);
      if (res.status === 200) {
        alert('Ingredients added!');
      }else {
        alert('Fail to send request');
      }
    }

    render () {
        return (
            <Container>
            <Card className="login-form">
              <h1 style={{textAlign: 'center'}}>Tambah Bahan</h1>
              <Form onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nama Bahan"
                  className="mb-3"
                  onChange={e => this.setState({name: e.target.value})}
                >
                  <Form.Control type="text" placeholder="name" required />
                </FloatingLabel>
                <Form.Group as={Row} className="mb-3" controlId="item">
                  <Form.Label column sm="2">
                      Jumlah
                  </Form.Label>
                  <Col sm="2">
                    <Form.Control min="0" step="1" type="number" class="form-control" defaultValue="0" onChange={e => this.setState({stock: Number(e.target.value)})}/>
                  </Col>
                </Form.Group>
                <Button className="resep-button-font" variant="info" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
            </Container>
        )
    }
    
}

export default BahanAdd