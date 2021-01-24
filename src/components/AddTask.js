import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0,10),
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    })
  }

  handeDate = e => {
    this.setState({
      date: e.target.value,
    })
  }

  handleClick = () => {  
    const {text, checked, date} = this.state;
    if(text.length>2) {
      this.props.add(text, date, checked);
      const add = this.props.add;
      if(add){
        this.setState({
          text: "",
          checked: false,
        })
      }
    } else {
      alert("Za krótka nazwa zadania");
    } 
  }

  render() {
    const minDate = new Date().toISOString().slice(0,10);
    return (
      <div className="form">
        <div>
          <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
          <input type="checkbox" checked={this.state.checked} id="importand" onChange={this.handleCheckbox}/>
          <label htmlFor="important">Priorytet</label><br />
          <label htmlFor="date"> Do kiedy zrobić</label>
          <input type="date" value={this.state.date} min={minDate} max="2022-12-31" onChange={this.handeDate}/>
          <button onClick={this.handleClick}>Dodaj</button>
        </div> 
      </div>
    );
  }
}

export default AddTask;