import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null,
  };
  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      //Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return { totalOwed: total };
    } else {
      return null;
    }
  }
  render() {
    // const data = firestoreConnect([{ collection: "clients" }]);
    // console.log(data);
    // const clients = [
    //   {
    //     id: "5881574145",
    //     firstName: "Kevin",
    //     lastName: "Johnson",
    //     email: "kevinj@gmail.com",
    //     phone: "555-555-5555",
    //     balance: "160",
    //   },
    // ];
    const { clients } = this.props;
    const { totalOwed } = this.state;
    console.log(clients);
    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-users" />
              clients{" "}
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-secondary">
              Total Owed{" "}
              <span className="text-primary">
                ${parseFloat(totalOwed).toFixed(2)}
              </span>
            </h5>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
// const mapStateToProps = (state, props) => {
//   return {
//     clients: state.firestore.data.clients,
//   };
// };
Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
};
// export default compose(
//   connect(mapStateToProps), firestoreConnect([{ collection: "clients" }]))(Clients);

// direct way
export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);
