import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import Counter from "./Counter";
import { add1, sub1, addNum1, asyncAdd } from "./redux/actions/actions";

class App extends Component {
  render() {
    return (
      <>
        <div className={"App"}>
          <h1>
            Счетчик <strong>{this.props.counter}</strong>
          </h1>

          <hr />

          <div className="Actions">
            <button onClick={this.props.onAdd}>Добавить 1</button>
            <button onClick={this.props.onSub}>Вычесть 1</button>
            <button onClick={() => this.props.onAddNum(5)}>Добавить 5</button>
            <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
          </div>
        </div>
        <Counter />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1Reducer.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add1()),
    onSub: () => dispatch(sub1()),
    onAddNum: number => dispatch(addNum1(number)),
    onAsyncAdd: number => dispatch(asyncAdd(100))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
