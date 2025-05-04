import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./component/MyComponent";
import React from "react";

class App extends React.Component {
  handleClick = (event) => {
    console.log("Long nguyen");
    console.log("name: ", this.state.name);
    this.setState({
      name: "Long nguyen",
    });
  };
  handleOnMoverOver(event) {
    console.log(event);
  }
  state = {
    name: "long",
    age: 20,
  };

  render() {
    return (
      <div>
        my name is {this.state.name} and i am {this.state.age} year old
        <br></br>
        <button onClick={this.handleClick}>click me</button>
        <br></br>
        <button onMouseOver={this.handleOnMoverOver}>hover me</button>
      </div>
    );
  }
}
export default App;

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello world</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

// export default App;
