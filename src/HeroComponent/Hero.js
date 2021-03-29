import React, { Component } from "react";

export default function Hero(WrappedComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }

    render() {
      return (
        <div>
          <WrappedComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
}
