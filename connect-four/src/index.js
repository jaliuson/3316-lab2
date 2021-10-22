import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Slot(props) {
    return (
      <button onClick={props.onClick} style={{backgroundColor: props.value, width: "60px", height: "60px", margin: "3px" , border: "0px", borderRadius: "100px"}}></button>
      //return button
      );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        slots: Array(42).fill("white"), //create and fill the slots array with all board slots and fill with white (empty) to begin
        redTurn: true, //begin on reds turn, if flase, it will be yellow's
      };
    }
  
    handleClick(i) { //click handler that will be invoked for any slot
      const slots = this.state.slots.slice(); //creates acopy of the current state (slots)

      if (calculateWinner(slots) || slots[i] != "white") { //disables occupied slots or the entire board if there's a winner
        return;    
      }

      slots[i] = this.state.redTurn ? 'red' : 'yellow'; //if reached, play is valid and next chip is flipped
      this.setState({
        slots: slots,
        redTurn: !this.state.redTurn, //changes next chip colour
      });
    }
  
    renderSlot(i) {
      return (
        <Slot
          value={this.state.slots[i]} //renders current state/colour of the slot
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.slots); //holds value of the winning colour if there is one
      let status;
      if(winner == "tie"){ //displays for a tied game (board full with no winner)
        status = 'This game is a tie, refresh to play agian'
      }
      else if (winner) { //displays winning color
        status = 'Winner: ' + winner;
      } 
      else { //displays whose turn it is for normal play
        status = 'Next player: ' + (this.state.redTurn ? 'red' : 'yellow');
      }
  
      return (
        <div style={{backgroundColor: "#2092bb", width: "60%" , padding: "30px", margin: "auto", marginTop: "100px", borderRadius: "12px"}}>
          {/* display status bar for player turn or end game statement*/}
          <div style={{fontSize: "40px", color: "white", border: "2px solid white", margin: "10px"}}>{status}</div> 
          {/* return redered slots in their respective rows, assign each slot an address for refrence*/}
          <div className="board-row">
            {this.renderSlot(0)}
            {this.renderSlot(1)}
            {this.renderSlot(2)}
            {this.renderSlot(3)}
            {this.renderSlot(4)}
            {this.renderSlot(5)}
            {this.renderSlot(6)}
          </div>
          <div className="board-row">
            {this.renderSlot(7)}
            {this.renderSlot(8)}
            {this.renderSlot(9)}
            {this.renderSlot(10)}
            {this.renderSlot(11)}
            {this.renderSlot(12)}
            {this.renderSlot(13)}
          </div>
          <div className="board-row">
            {this.renderSlot(14)}
            {this.renderSlot(15)}
            {this.renderSlot(16)}
            {this.renderSlot(17)}
            {this.renderSlot(18)}
            {this.renderSlot(19)}
            {this.renderSlot(20)}
          </div>
          <div className="board-row">
            {this.renderSlot(21)}
            {this.renderSlot(22)}
            {this.renderSlot(23)}
            {this.renderSlot(24)}
            {this.renderSlot(25)}
            {this.renderSlot(26)}
            {this.renderSlot(27)}
          </div>
          <div className="board-row">
            {this.renderSlot(28)}
            {this.renderSlot(29)}
            {this.renderSlot(30)}
            {this.renderSlot(31)}
            {this.renderSlot(32)}
            {this.renderSlot(33)}
            {this.renderSlot(34)}
          </div>
          <div className="board-row">
            {this.renderSlot(35)}
            {this.renderSlot(36)}
            {this.renderSlot(37)}
            {this.renderSlot(38)}
            {this.renderSlot(39)}
            {this.renderSlot(40)}
            {this.renderSlot(41)}
          </div>
        </div>
      );
    }
  }
  
  //render a game board for the react page
  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  );

  function calculateWinner(slots) { //searches for a winner
    console.log(slots)
    for(let i=0 ; i<21 ; i+=7){ //searches for a win by vertical connection
      for(let j=i ; j<(i+7) ; j++){
        if(slots[j] != "white" && slots[j] == slots[j+7] && slots[j] == slots[j+14] && slots[j] == slots[j+21]){
          return slots[j];
        }
      }
    }

    for(let i=0 ; i<41 ; i+=7){ //searches for a win by horizontal connection
      for(let j=i ; j<(i+4) ; j++){
        if(slots[j] != "white" && slots[j] == slots[j+1] && slots[j] == slots[j+2] && slots[j] == slots[j+3]){
          return slots[j];
        }
      }
    }
    
    for(let i=0 ; i<42 ; i++){ //checks for empty squares 
      if(slots[i] != "red" && slots[i] != "yellow"){
        return null
      }
    }

    return "tie"; //returns a tie if all square have been filled
  }