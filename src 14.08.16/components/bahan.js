import React from "react"
import AuthService from "../services/auth.service";
import { Container, Row, Col, Card, Button, Form, Spinner } from "react-bootstrap";
class Bahan extends React.Component {
    async handler() {
        const res = await AuthService.getIngredients();
        if (res.status === 200) {
          this.setState({arrayBahan: res.data.data})
          this.setState({loading: false});
          this.state.arrayBahan.forEach(item => {
            this.setState({arrayRes: [...this.state.arrayRes, {
                'id' : item.id,
                'stock' : item.stock
            }]})
          });
        }
        else {
          alert('Fail to get data');
        }
      }
    
        constructor(props) {
            super(props);
            this.state = {
              loading: true,
              arrayBahan: [],
              arrayRes: []
            }
            this.handler();
        }

    componentDidMount() {
        document.title = 'Bahan - Doraemonangis';
    }

    update(id, value) {
        console.log(value)
        for (var i=0; i<this.state.arrayRes.length; i++) {
            if (this.state.arrayRes[i].id === id) {
                var arr = this.state.arrayRes
                arr[i].stock = Number(value) 
                this.setState({arrayRes: arr})
            }
        }
        console.log(this.state.arrayRes)
    }

    async handleSubmit() {
        const res = await AuthService.setIngredients(this.state.arrayRes);
        if (res.status === 200) {
          alert('Stocks updated!');
        }else {
          alert('Fail to send request');
        }
    }

    render () {
        return this.state.loading ? (<h1 className="centered resep-judul">Loading <Spinner animation="border" /></h1>)
        :(
            <Container>
                <Row className="mb-2" xs={3}>
                    <Col></Col>
                    <Col className="centered">
                        <h2 className="resep-judul mb-3">Daftar Bahan</h2>
                    </Col>
                    <Col className="resep-button">
                        <Button className="resep-button-font" variant="info" href="/add-bahan">Add Bahan</Button>
                    </Col>
                </Row>
                <Form onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
                <Row xxl={5} xl={4} lg={3} sm={2} xs={1}>
                        {this.state.arrayBahan.map((item) => {
                        return (
                            <Col>
                              <Card className="resep-card">
                                <Card.Body>
                                    <Card.Title className="overflow">{item.name}</Card.Title>
                                        <Card.Text>
                                        <Form.Group as={Row} className="mb-2 mt-2" controlId={item.id}>
                                        <Form.Label column sm="5">
                                          Jumlah
                                        </Form.Label>
                                        <Col sm="5">
                                            <Form.Control min="0" step="1" type="number" class="form-control" defaultValue={item.stock} onChange={(e) => {this.update(item.id, e.target.value)}}/>
                                        </Col>
                                      </Form.Group>
                                    </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                        )
                    })}
                </Row>
                <Row xs={1}>
                    <Col className="resep-button">
                        <Button className="resep-button-font" variant="info" type="submit">Save Changes</Button>
                    </Col>
                </Row>
                </Form>
            </Container>
        )
    }
    
}

export default Bahan