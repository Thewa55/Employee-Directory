import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Container from "./components/Container";
import Row from "./components/Row"
import Input from "./components/Input"
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    searchname: ""
  };

  handleInputChange = event => {
    const{name, searchname} = event.target;
    this.setState({
      [name]: searchname
    })
  }

  searchEmployee = () =>{
    const employees = this.state.employees.filter(employee => employee.name.includes(this.searchname))

    this.setState({employees})
  }  

  render() {
    return (
      <Container>
        <Title
          name={this.state.searchname}
          onChange={this.handleInputChange}
        >Employees</Title>
        <Input></Input>
          {this.state.employees.map(employee => (
          <Row>
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              role={employee.role}
              email={employee.email}
            />  
          </Row>
        ))}
      </Container>
    );
  }
}

export default App;
