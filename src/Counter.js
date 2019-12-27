import React, {Component} from 'react'
import { connect } from 'react-redux';
import { add2, sub2, addNum2 } from './redux/actions/actions';

class Counter extends Component {
  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={()=> this.props.onAddNum(5)}>Добавить 5</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2Reducer.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add2()),
    onSub: () => dispatch(sub2()),
    onAddNum: number => dispatch(addNum2(number))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 