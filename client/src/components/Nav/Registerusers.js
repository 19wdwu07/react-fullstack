import React, {Component} from 'react';
import Form from '../Form/Form.js';

class Registerusers extends Component{
  render(){
    return(
      <div className="container bg-info text-light">
        <h1 className="text-light"> Register A New User </h1>
        <Form/>
      </div>
    )
  }
}
export default Registerusers;
