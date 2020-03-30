import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import Router from '../Router';

class Form extends Component {
  constructor(props){
    super(props);
    this.state ={
      username : '',
      email:  '',
      password: ''
    };
  }
  changeEvent=(e)=>{
    e.preventDefault();
    const { value, name } = e.target
    this.setState({
    [name]:value
  });

  }
  onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    const router = <Router formData={this.state}/>
    ReactDOM.render(router,document.getElementById('home'));
    }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}  className="container mt-5" >
        <label> Username: </label>
        <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="text" name="username" value={this.state.username}/>
        <label> Email: </label>
        <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="email" name="email" value={this.state.email}/>
        <label> Password: </label>
        <input className="form-control mt-2 mb-3" onChange={this.changeEvent} type="password" name="password" value={this.state.password}/>
        <input className="form-control mt-5 mb-5" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Form;
