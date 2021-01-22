import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0,10),
  }

  handeDate = e => {
    this.setState({
      date: e.target.value,
    })
  }

  render() {
    const minDate = new Date().toISOString().slice(0,10);
    return (
      <div className="form">
        <div>
          <input type="text" placeholder="dodaj zadanie" value={this.state.text}/>
          <input type="checkbox" checked={this.state.checked} id="importand"/>
          <label htmlFor="important">Priorytet</label><br />
          <label htmlFor="date"> Do kiedy zrobić</label>
          <input type="date" value={this.state.date} min={minDate} max="2022-12-31" onChange={this.handeDate}/>
          <button>Dodaj</button>
        </div> 
      </div>
    );
  }
}

export default AddTask;