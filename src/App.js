import React, { Component } from "react";
import Hero from "./HeroComponent/Hero";
import StocksList from "./WrappedComponents/StocksList";
import UserList from "./WrappedComponents/UserList";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];
const Users = Hero(UserList, UsersData);
const Stocks=Hero(StocksList, StocksData);
class App extends Component {
  render() {
    return (
      <div>
        <Users></Users>
        <Stocks></Stocks>
      </div>
    );
  }
}
export default App;
