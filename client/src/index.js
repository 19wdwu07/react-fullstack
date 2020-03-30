import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav/Nav';
// import dotenv from 'dotenv';
//import Form from './components/Form/Form';

// import Router from './components/Router';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Nav/>


      </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
