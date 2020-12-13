import Navbar from '../../components/Navbar'
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import axios from 'axios';
/**
* @author
* @function SignUp
**/

    




export default class ForgetPassword extends Component {

    render () {
        return (
      <div className="auth-wrapper">
        <Navbar/>
      <div className="auth-inner">
            <form /**onSubmit={this.handleSubmit}**/>
                   
                    <h3> Forget Password </h3>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required autoFocus
                            onChange={e => this.email = e.target.value}/>
                    </div>
                    <button className="btn btn-dark btn-block" autoFocus>Submit</button>
            </form>
                
            </div> 
        </div>
           
                
        );
    }
}