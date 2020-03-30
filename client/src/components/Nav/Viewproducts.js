import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap through node_modules
import '../../index.css';//external style file
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';//to do CRUD API call- MongoDB


class Viewproducts extends Component{
  render(){
    return(
      <div className="container bg-info text-light">
        <View/>
      </div>
    )
  }
}
export default Viewproducts;




class View extends React.Component{

  constructor(props){
    super(props);
    this.state ={

    }
  }

  componentDidMount(){
  //const REACT_APP_BASE_URL = "http://192.168.33.10:5000"

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  //  const BASE_URL ='http://192.168.33.10:5000';
    console.log(BASE_URL);
    this.getProducts(BASE_URL);

  }

  getProducts = (url) =>{
    console.log(`${url}/allProductsFromDB`)
    axios.get(`${url}/allProductsFromDB`)
    .then(res =>{
      console.log(res.data);
      // this.setState = res.data.;
      // console.log(this.state);
      let product=[];
      let prod;
      for (let i = 0; i<res.data.length;i++){
        prod = (
            <div className="container bg-info card border">
              <h1 className="card-title text-light"> {res.data[i].name} </h1>
              <img src={res.data[i].image_url} className="card-img-top" alt="product" />
              <h2 className="card-body"> {res.data[i].price}</h2>
            </div>
          )
        product.push(prod);
      }
      ReactDOM.render(product,document.getElementById('home'));
    })

  }


  render(){

    return(
      <div className="container">
      <h1 style={{color : "Brown"}}> Products View </h1>)
      </div>
    )
  }


}

// class Product extends Component{
//
//   render(){
//     return(
//       <div className="container">
//       <h1> Products </h1>
//       <div className="row text-light"><h3>{this.props.name}</h3> <h4> {this.props.price}</h4>
//       </div>
//       </div>
//     )
//   }
// }
