import React, {Component} from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component{
  state = {
    persons: [
      {
        name: "Elias",
        age: 27,
      },
      {
        name: "Elijah",
        age: 22,
      },
      {
        name: "Sijalu",
        age: 27,
      }
    ],
    description: "Cheese"
  }
  switchNameHandler = (newName) => {
    this.setState({persons:     
      [  
        {
          name: newName,
          age: 27,
        },
        {
          name: "Elijah",
          age: 22,
        },
        {
          name: "Sijalu",
          age: 27,
        }
      ]
    });
  }

  nameChanged = (event) => {
    this.setState({persons:     
      [  
        {
          name: "Elias",
          age: 27,
        },
        {
          name: event.target.value,
          age: 22,
        },
        {
          name: "Sijalu",
          age: 27,
        }
      ]
    });
  }

  render(){
    const style = {
      "background-color": "white",
      "font": "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Maximilian")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person changeName={this.nameChanged} name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person click={this.switchNameHandler.bind(this,"Pickles")} name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.description} age={12} />
      </div>
    );
  }
}

export default App;
