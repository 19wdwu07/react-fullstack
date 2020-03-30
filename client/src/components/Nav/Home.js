
import React, {Component} from 'react';
import home from './homeImage.jpeg';

class Home extends Component{
  render(){
    return(
      <div className="container">
        <h1 className="text-light"> Home </h1>
        <img className="img-thumbnail" src={home} alt="Eagle"/>
      </div>
    )
  }
}
export default Home;
