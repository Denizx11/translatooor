
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/views/Login';
import Profile from './component/views/Profile';
import Orders from './component/views/Orders';
import Navbar from './component/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div >
        <Navbar/>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
 