import React, { Component } from "react";
import TableRow from "./TableRow";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  loadTableRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map((obj, i) => {
        return <TableRow obj={obj} key={i} />;
      });
    }
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>{this.loadTableRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default UserList;