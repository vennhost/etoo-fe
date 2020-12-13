import React from 'react';
import './App.css';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Branding from './containers/Branding';
import ContactUs from './containers/ContactUs';
import AboutUs from './containers/AboutUs';
import Footter from './components/Footter';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import ForgetPassword from './containers/ForgetPassword';




function App() {
  return (
    <Router>
      <div className="App">
      
      <Route path="/" exact component={Home}/>
      <Route path="/Branding" component={Branding}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/AboutUs" component={AboutUs}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/Login" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>  
      <Route path="/ForgetPassword" component={ForgetPassword}/>  
  
     <Footter/>  
    </div>
   
    </Router>
    
  );
};

export default App;
