import React from "react"
import AuthService from "../services/auth.service";
import { Container, Form, FloatingLabel, Card, Button, Row, Col, Spinner } from "react-bootstrap";
class ResepAdd extends React.Component {
  async handler() {
    const res = await AuthService.getIngredients();
    if (res.status === 200) {
      this.setState({arrayBahan: res.data.data})
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
          name: "",
          arrayBahan: [],
          arrayReq: [],
          arrayRes: []
        }
        this.handler();
    }

    componentDidMount() {
        document.title = 'Add Resep - Doraemonangis';
    }

    async handleSubmit() {
      var arr = this.state.arrayReq.reverse();
      var container = []
      console.log(arr)
      for (var j=0; j<arr.length; j++) {
        if (container.includes(arr[j].id) === false) {
          console.log(arr[j])
          container.push(arr[j].id);
          if (arr[j].quantity !== 0) {
            this.state.arrayRes.push(arr[j])
          }
        }
      }
      console.log(this.state.arrayRes)
      const res = await AuthService.setRecipe(this.state);
      if (res == null) {
        alert('Please fill at least one ingredient');
      }else if (res.status === 200) {
        alert('Recipe added!');
      }else {
        alert('Fail to send request');
      }
    }

    render () {
        return this.state.loading ? (<h1 className="centered resep-judul">Loading <Spinner animation="border" /></h1>)
        :(
            <Container>
            <Card className="login-form">
              <h1 style={{textAlign: 'center'}}>Tambah Resep</h1>
              <Form onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nama Resep"
                  className="mb-3"
                  onChange={e => this.setState({name: e.target.value})}
                >
                  <Form.Control type="text" placeholder="name" required />
                </FloatingLabel>
                {this.state.arrayBahan.map((item) => (
                    <Form.Group as={Row} 
                      className="mb-3" 
                      controlId={item.id} 
                      onChange={
                        e => this.setState({
                          arrayReq: [...this.state.arrayReq, {
                            'id' : item.id, 
                            'quantity' : Number(e.target.value)
                          }]
                        })
                      }>
                      <Form.Label column sm="2">
                        {item.name}
                      </Form.Label>
                      <Col sm="2">
                        <Form.Control min="1" step="1" type="number" className="form-control" defaultValue="0"/>
                      </Col>
                      <Form.Label column sm="2">
                        gram
                      </Form.Label>
                    </Form.Group>
                ))}
                <Button className="resep-button-font" variant="info" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
            </Container>
        )
    }
    
}

export default ResepAdd