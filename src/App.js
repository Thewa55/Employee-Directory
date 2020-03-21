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
    const{name, value} = event.target;
    console.log(event.target)
    this.setState({
      [name]: value
    })
    
    const employees = this.state.employees.filter(employee => employee.name.includes(this.state.searchname))

    this.setState({employees})
  }  

  render() {
    return (
      <Container>
        <Title
        >Employees</Title>
        <Input
          value = {this.state.searchname}
          name= "searchname"
          onChange={this.handleInputChange}></Input>
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
