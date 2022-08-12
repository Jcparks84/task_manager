import React, { Component } from 'react'
import './App.css';

const tasks = [
  {
    "id": 1,
    "title": "Capstone brewery averages",
    "description": "Figure out how to get the averages from to display.",
    "completed": false
}
{
  "id": 2,
  "title": "Finish task_manager",
  "description": "Complete Task_manager app",
  "completed": false
}

]




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      viewCompleted:false,
      tasklist: tasks,
    };
  }

displayCompleted = status => {

  if
}



}

export default App;
