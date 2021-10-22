import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Button from 'react-button';

class Slot extends React.Component{
  constructor(){
    super();
    this.state = {
      buttonColor: "black",

    }
  }
  
  makeMove(){
    this.setState({buttonColor: this.props.playerMarker})
    /*if (this.props.playerMarker == "red"){
      this.props.playerMarker.setState
    }
    else if (this.props.playerMarker == "yellow"){
      this.props.playerMarker = "red"
    }*/
  }
  
  render(){
    return( 
      <button style={{color: "#ff0000", backgroundColor: this.state.buttonColor}} /*onClick={this.makeMove.bind(this)}*/ onClick={this.props.handler}>
        {this.props.playerMarker}
      </button>
    )
  }
}
class Board extends React.Component{
  constructor(){
    super();
    this.state = {
      playerTurn: "red"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    if(this.state.playerTurn == "red"){
      this.setState({playerTurn: "yellow"})
    }
    else if(this.state.playerTurn == "yellow"){
      this.setState({playerTurn: "red"})
    }
  }

  render(){
    return(
      <div style={{backgroundColor: "#2092bb", width: "400px" , padding: "20px"}}>
        <Slot ID={1} playerMarker={this.state.playerTurn} handler={this.clickHandler}></Slot>
        <Slot ID={2} playerMarker={this.state.playerTurn} handler={this.clickHandler}></Slot>
        <Slot ID={3} playerMarker={this.state.playerTurn} handler={this.clickHandler}></Slot>
        <Slot ID={4} playerMarker={this.state.playerTurn} handler={this.clickHandler}></Slot>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
