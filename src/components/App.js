import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w wiedźmina",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "posprzątać pokój",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "naprawić auto",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "wybudować wjazd na działkę",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "zrobić zakupy na weekend",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  }

  deleteTask = (id) => {
    console.log("USUNIĘCIE TAKSA " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    const deleteTask = tasks.splice(index,1);
    this.setState({
      tasks: tasks,
    })
  }

  changeTaskStatus = (id) => {
    console.log("ZMIANA " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })

    this.setState({
      tasks: tasks,
    })
  }

  render() {
    return (
      <div className="App">
        TOO do app
        <AddTask />
        <TaskList  tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
