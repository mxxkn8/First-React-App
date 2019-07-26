import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import Register from './component/layout/Register';
import login from './component/layout/login';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <Route exact path="/" compnent={Landing}/>
      <div className="container">
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={login}/>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
