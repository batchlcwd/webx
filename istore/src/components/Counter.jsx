import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("component initalized");
    this.state = {
      count: 1,
    };
  }

  updateCounter() {
    console.log("update counter");
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("component mounted..counter");
  }

  componentWillUnmount() {
    console.log("cleanup ");
  }

  shouldComponentUpdate() {
    console.log("before render");
    return false;
  }

  componentDidUpdate() {
    console.log("after update");
  }
  render() {
    return (
      <div className="mt-4">
        <h1 className="text-3xl font-bold">
          Counter Value : {this.state.count}
        </h1>

        <button onClick={() => this.updateCounter()}>update</button>
      </div>
    );
  }
}

export default Counter;
