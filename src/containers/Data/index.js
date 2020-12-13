import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {FormControl, InputGroup} from 'react-bootstrap';
import ReactDOM from 'react-dom';


const lookup = {
  "NULL": [
    { id: 'M1', text: '- Select Data Plan -'},
  ],
  "MTN": [
    { id: 'M1', text: '1GB SME ₦330'},
    { id: 'M2', text: '2GB SME ₦660'},
    { id: 'M3', text: '3GB SME ₦990'},
    { id: 'M5', text: '5GB SME ₦1650'},
    { id: 'M6', text: '6GB GIFTING ₦2325'},
    { id: 'M8', text: '8GB GIFTING ₦2790'},
    { id: 'M10', text: '10GB GIFTING ₦3250'},
    { id: 'M15', text: '15GB GIFTING ₦4650'},
    { id: 'M20', text: '20GB GIFTING ₦5580'},
    { id: 'M40', text: '40GB GIFTING ₦9500'},
    { id: 'M75', text: '75GB GIFTING ₦13950'},
    { id: 'M110', text: '110GB GIFTING ₦18600'},
  ],
  "AIRTEL": [
    { id: 'A1', text: '750MB  ₦450'},
    { id: 'A2', text: '1.5GB  ₦900'},
    { id: 'A3', text: '2GB  ₦1080'},
    { id: 'A4', text: '3GB  ₦1350'},
    { id: 'A5', text: '4.5GB  ₦1800'},
    { id: 'A6', text: '6GB  ₦2250'},
    { id: 'A7', text: '8GB  ₦2700'},
    { id: 'A8', text: '11GB  ₦3600'},
    { id: 'A9', text: '15GB  ₦4500'},
    { id: 'A10', text: '40GB  ₦9000'},
    { id: 'A11', text: '75GB  ₦13500'},
    { id: 'A12', text: '110GB  ₦1800'},
  ],
  "GLO": [
    { id: 'G1', text: '1.36GB ₦450'},
    { id: 'G2', text: '2.9GB ₦900'},
    { id: 'G3', text: '4.1GB ₦1350'},
    { id: 'G4', text: '5.8GB ₦1800'},
    { id: 'G5', text: '7.7GB ₦2250'},
    { id: 'G6', text: '10GB ₦2700'},
    { id: 'G7', text: '13.25GB  ₦3600'},
    { id: 'G8', text: '18.25GB  ₦4500'},
    { id: 'G9', text: '29.5GB  ₦7200'},
    { id: 'G10', text: '50GB  ₦9000'},
    { id: 'G11', text: '93GB ₦13500'},
    { id: 'G12', text: '119GB  ₦16200'},
    { id: 'G12', text: '138GB  ₦18000'},
  ],
  "MOBILE": [
    { id: '1', text: '500MBGB ₦400'},
    { id: '2', text: '1.5GB ₦800'},
    { id: '3', text: '2GB ₦960'},
    { id: '4', text: '3GB ₦1200'},
    { id: '5', text: '4.5GB ₦1700'},
    { id: '6', text: '11GB ₦3200'},
    { id: '7', text: '15GB  ₦4000'},
    { id: '8', text: '40GB  ₦8000'},
    { id: '9', text: '75GB  ₦12000'},
  ],
}

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 'NULL'
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  }

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div className="auth-inner">
        
             
              <h2>Buy Data</h2>
      <Form /**onSubmit={this.handleSubmit}**/>
          <Form.Group>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Phone Number</InputGroup.Text>
                </InputGroup.Prepend>
              <FormControl type="tel" size="lg" id="inlineFormInputGroup" placeholder="Enter Number" />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Network</InputGroup.Text>
                </InputGroup.Prepend>
            <Form.Control as="select" size="lg" custom onChange={this.onChange}>     
              <option value="NULL">- Choose Network -</option>
              <option value="MTN">MTN</option>
              <option value="AIRTEL">AIRTEL</option>
              <option value="GLO">GLO</option>
              <option value="MOBILE">9MOBILE</option>  
            </Form.Control>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
          <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Data Plan</InputGroup.Text>
                </InputGroup.Prepend>
            <Form.Control as="select" size="lg" custom>
                
              {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
                
            </Form.Control>
            </InputGroup>
          </Form.Group>
          <button className="btn btn-dark btn-block" autoFocus>SUBMIT</button>
         
        </Form>

    </div>
     
    );
  }
}
ReactDOM.render(
  <Data />,
  document.getElementById('root')
);
export default Data;
