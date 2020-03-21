import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Container from "./components/Container";
import Row from "./components/Row"
// import Input from "./components/Input"
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
    console.log(this.state.searchname)
    const employees = this.state.employees.filter(employee => employee.name.includes(this.state.searchname))
    console.log(employees)
    // this.setState({employees})
  }  

  render() {
    return (
      <Container>
        <Title
        >Employees</Title>
        <div className="mb-3"> 
          Search for employee:
          <form className="form mb-3">
            <input  
              value={this.state.searchname}
              name="searchname"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search"/>
          </form>
        </div>
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
