import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={{ fontSize: 18 }}>
          {this.formatValue()}
        </span>
        <button
          onClick={() => this.props.onValueModify(this.props.counter, 1)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onValueModify(this.props.counter, -1)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() =>
            this.props.onValueModify(
              this.props.counter,
              -this.props.counter.value
            )
          }
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let bgClass = "badge m-2 bg-";
    bgClass += this.props.counter.value === 0 ? "warning" : "primary";
    return bgClass;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
