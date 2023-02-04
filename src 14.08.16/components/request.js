import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import AuthService from "../services/auth.service";
import { Container, Button,  Spinner } from "react-bootstrap";

function handleSubmit(id, status) {
  AuthService.setRequest(id, status).then(res => {
    if (res.status === 200) {
      window.location.reload(false);
    }
    else {
      alert('Server error')
    }
  })
  
}
class Request extends React.Component {
    async handler() {
        const res = await AuthService.getRequest();
        if (res.status === 200) {
          this.state.arrayReq = res.data.data
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
            arrayReq: [],
            columns: [{
                dataField: 'id',
                text: 'ID',
                sort: true,
                headerStyle: { width: '70px' }
              }, {
                dataField: 'name',
                text: 'Request',
                sort: true
              }, {
                dataField: 'quantity',
                text: 'Qty',
                sort: true,
                headerStyle: { width: '70px' }
              }, {
                dataField: 'createdAt',
                text: 'Timestamp',
                sort: true,
                formatter: this.dateFormatter
              }, {
                dataField: 'status',
                text: 'Status',
                sort: true,
                formatter: this.statusFormatter
              }]
        };
        this.handler();
    }

    componentDidMount() {
        document.title = 'Bahan - Doraemonangis';
    }

    dateFormatter(cell) {
      return ((new Date(cell)).toLocaleString())
    }

    statusFormatter(cell, row) {
      if (row.status === 'Unconfirmed') {
        return (
          <>
            { cell } &nbsp;&nbsp;
            <Button variant="danger" className="mb-1 mt-1 pl-1 pr-1 font-small login-button" onClick={() => handleSubmit(row.id, 'Declined')}>Decline</Button>
            &nbsp;
            <Button variant="success" className="pl-1 pr-1 font-small login-button" onClick={() => handleSubmit(row.id, 'Accepted')}>Accept</Button>
          </>
        )
      }
      return (<>{ cell }</>)
    }

    render () {
      const { SearchBar } = Search;
        return this.state.loading ? (<h1 className="centered resep-judul">Loading <Spinner animation="border" /></h1>)
        :(
          <Container>
            <h2 className="resep-judul mb-3 centered">Daftar Request</h2>
              <ToolkitProvider
              keyField="id"
              data={ this.state.arrayReq }
              columns={ this.state.columns }
              search
            >
              {
                props => (
                  <div>
                    <SearchBar { ...props.searchProps } srText="" className="login-button mb-2"/>
                    <BootstrapTable
                      { ...props.baseProps } 
                      striped bordered hover
                    />
                  </div>
                )
              }
            </ToolkitProvider>
          </Container>
        )
    }
    
}

export default Request