import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleResetAll = () => {
    const resetCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: resetCounters });
  };

  handleAddCounter = () => {
    const counters = [...this.state.counters];
    const lastIndex = counters.length - 1;
    const lastId = lastIndex < 0 ? 0 : counters[lastIndex].id;
    const newCounter = { id: lastId + 1, value: 0 };
    counters[counters.length] = newCounter;
    this.setState({ counters: counters });
  };

  handleValueModify = (counter, amount) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    const value = counters[index].value;
    if (value + amount < 0) return;
    counters[index].value += amount;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleResetAll}
          className="btn btn-danger btn-sm m-2"
        >
          Reset All
        </button>
        <button
          onClick={this.handleAddCounter}
          className="btn btn-primary btn-sm m-2"
        >
          Add Counter
          <span className="badge bg-secondary ms-2">
            {this.state.counters.length}
          </span>
        </button>
        <br />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onValueModify={this.handleValueModify}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
