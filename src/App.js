import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./components/MenuComponent/index";
import "./App.css";
import { DISHES } from "./shared/dishes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <>
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <MenuComponent dishes={this.state.dishes} />
        </div>
      </>
    );
  }
}

export default App;
