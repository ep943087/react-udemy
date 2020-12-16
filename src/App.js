import React, {Component} from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component{
  state = {
    persons: [
      {
        id: 130,
        name: "Elias",
        age: 27,
      },
      {
        id: 3939,
        name: "Elijah",
        age: 22,
      },
      {
        id: 4002,
        name: "Sijalu",
        age: 27,
      }
    ],
    showPersons: false
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

  nameChanged = (event, id) => {
    const persons = this.state.persons.map(
      person=>{
        if(person.id === id)
          person.name = event.target.value;
        return {...person};
      }
    )
    this.setState({persons});
  }
  togglePersonsHandler = () => {
    const showPersons = !this.state.showPersons;
    this.setState({
      showPersons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons})
  }

  render(){
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if(this.state.showPersons === true){
      persons = (          
        <div>
          {
            this.state.persons.map((person, index)=>(
              <Person click={this.deletePersonHandler.bind(this,index)}
               name={person.name} 
               age={person.age} 
               key={person.id}
               change={(event) => this.nameChanged(event,person.id)} />
            ))
          }
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
