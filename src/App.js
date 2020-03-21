import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
// import Row from "./components/Row"
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      // <Wrapper>
        <Container>
        <Title>Employees</Title>
          {this.state.employees.map(employee => (
            // <Row>
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              role={employee.role}
              email={employee.email}
            />  
            // </Row>
          ))}
        </Container>
      // </Wrapper>
    );
  }
}

export default App;
