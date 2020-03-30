import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as  Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
// import Viewitems from './Viewproducts';
// import Viewposts from './Viewposts';
import Registerusers from './Registerusers';
import Viewproducts from './Viewproducts';


class Nav extends Component{
  home =()=>{
    const home = <Home/>
    ReactDOM.render(home,document.getElementById('home'));
  }

  registerUser =()=>{
    const regUser = <Registerusers/>
    ReactDOM.render(regUser,document.getElementById('home'));
  }
  viewProducts =()=>{
    const viewProducts = <Viewproducts/>
    ReactDOM.render(viewProducts,document.getElementById('home'));
  }

  render(){
    return(
      <div>
        <nav className="bg-info text-dark my-5">
        <button className="btn btn-lg btn-light mr-5" onClick= {this.home}> Home </button>
        <button className="btn btn-lg btn-light mr-5" onClick= {this.viewProducts}> View Products</button>
        <button className="btn btn-lg btn-light mr-5" onClick= {this.registerUser}> Register New User </button>
        </nav>

        <hr/>


      </div>
    )
  }
}

export default Nav;
