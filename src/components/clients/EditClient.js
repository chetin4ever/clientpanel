import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class EditClient extends Component {
  constructor(props) {
    super(props);
    //Create Refs
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    //upadateClient
    const { client, firestore, history } = this.props;
    const updClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance: this.balanceInput.current.value,
    };
    //update to firestore

    firestore
      .update({ collection: "clients", doc: client.id }, updClient)
      .then(history.push("/"));
  };
  render() {
    const { disableBalanceOnEdit } = this.props.settings;
    console.log(this.props.settings);
    const { client } = this.props;
    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left " /> Back To Dashboard
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Add Client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    minLength="2"
                    required
                    onChange={this.onChange}
                    ref={this.firstNameInput}
                    defaultValue={client.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">LastName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    minLength="2"
                    required
                    ref={this.lastNameInput}
                    onChange={this.onChange}
                    defaultValue={client.lastName}
                  />
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      minLength="2"
                      required
                      onChange={this.onChange}
                      ref={this.emailInput}
                      defaultValue={client.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      minLength="10"
                      required
                      onChange={this.onChange}
                      ref={this.phoneInput}
                      defaultValue={client.phone}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      name="balance"
                      ref={this.balanceInput}
                      onChange={this.onChange}
                      defaultValue={client.balance}
                      disabled={disableBalanceOnEdit}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
EditClient.propTypes = {
  firestore: PropTypes.object.isRequired,
};
export default compose(
  firestoreConnect((props) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings,
  }))
)(EditClient);
