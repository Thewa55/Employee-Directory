import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
        {this.state.employees.map(employee => (
          <FriendCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.role}
            location={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
