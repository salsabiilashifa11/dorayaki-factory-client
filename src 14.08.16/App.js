import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './use-token';
import NavbarComponent from './components/navbar';
import Resep from './components/resep';
import Bahan from './components/bahan';
import Login from './components/login';
import SignUp from './components/signup';
import ResepAdd from './components/resep-add';
import Request from './components/request';
import BahanAdd from './components/bahan-add';

function App() {
  const { setToken, token } = useToken();
  if (!token) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login setToken={setToken} exact/>} />
              <Route path="/signup" element={<SignUp setToken={setToken} />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<><NavbarComponent /><br /><Resep /></>} exact/>
              <Route path="/bahan" element={<><NavbarComponent /><br /><Bahan /></>} exact/>
              <Route path="/add-bahan" element={<><NavbarComponent /><br /><BahanAdd /></>} exact/>
              <Route path="/add-resep" element={<><NavbarComponent /><br /><ResepAdd /></>} exact/>
              <Route path="/request" element={<><NavbarComponent /><br /><Request /></>} exact/>
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
