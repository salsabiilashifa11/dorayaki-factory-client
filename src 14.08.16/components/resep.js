import React from "react"
import AuthService from '../services/auth.service';
import { Accordion, Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

class Resep extends React.Component {
  async handler() {
    const res = await AuthService.getRecipes();
    if (res.status === 200) {
      this.setState({arrayResep: res.data.data})
      this.setState({loading: false});
    }
    else {
      alert('Fail to get data');
    }
  }

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          arrayResep: []
        }
        this.handler();
    }

    componentDidMount() {
        document.title = 'Resep - Doraemonangis';
    }

    render () {
        return this.state.loading ? (<h1 className="centered resep-judul">Loading <Spinner animation="border" /></h1>)
        :(
            <Container>
                <Row className="mb-2" xs={3}>
                    <Col></Col>
                    <Col className="centered">
                        <h2 className="resep-judul mb-3">Daftar Resep</h2>
                    </Col>
                    <Col className="resep-button">
                        <Button className="resep-button-font" variant="info" href="/add-resep">Add Resep</Button>
                    </Col>
                </Row>
                <Row xxl={5} xl={4} lg={3} sm={2} xs={1}>
                    {this.state.arrayResep.map((item) => {
                        return (
                            <Col>
                              <Card className="resep-card">
                                <Card.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey={item.name} className="resep-accordion" bg="light">
                                            <Accordion.Header>
                                              <Card.Title className="overflow">{item.name}</Card.Title>
                                            </Accordion.Header>
                                          <Accordion.Body>
                                            <h5>Resep</h5>
                                            <ul>
                                                {item.ingredients.map((resep) => {
                                                    return (
                                                        <li>{resep.name} {resep.quantity} gram</li>
                                                    )
                                                })}
                                            </ul>
                                          </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                              </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
    
}

export default Resep