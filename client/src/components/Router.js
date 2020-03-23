
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap through node_modules
import './index.css';//external style file
import React, {Component} from 'react';
import axios from 'axios';//to do CRUD API call- MongoDB

class Router extends Component{
state =[
    {
      name : 'Book',
      price : 12,
      userId : '5e65917813f07b0e3b3c5826'
    },
    {
      name : 'Laptop',
      price : 4500,
      userId : '5e65917813f07b0e3b3c5826'
    }

  ]

  componentDidMount(){

      const BASE_URL = process.env.REACT_APP_BASE_URL;
      console.log(BASE_URL);

    this.getProducts(BASE_URL);
    this.deleteProduct(BASE_URL);
    this.addProduct(BASE_URL);
  }



  getProducts = (url) =>{
    console.log(`${url}/allProductsFromDB`)
    axios.get(`${url}/allProductsFromDB`)
    .then(res =>{
      console.log(res.data);
    })

  }

  deleteProduct = (url) => {
    console.log(`${url}/deleteProduct/5e66b7e58c1e32139c750fc3`);
    axios.delete(`${url}/deleteProduct/5e66b7e58c1e32139c750fc3`)
    .then(res => {
      console.log('deleted');
    });

  }
  addProduct = (url) =>{
    console.log(`${url}/addProduct`);
    const post = {
      name : this.state[1].name,
      price : this.state[1].price,
      userId : this.state[1].userId
    }
    axios.post(`${url}/addProduct`, post)
    .then(res => {
      console.log(res.data);

    })
  }



  render(){
    const myStyle ={
      backgroundColor : "lightblue",
      color : "blue"
    }
    return(
      <div>
      <h1 style={myStyle}> Get request to database </h1>
      <h1 style={{color : "Red"}}> Get request to database </h1>)
      </div>
    )
  }


}

export default Router;
