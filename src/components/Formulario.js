import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListaMoeda from "./ListaMoedas";

import { coinConverter } from "../actions";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.onChangeValueAmount = this.onChangeValueAmount.bind(this);
    this.onChangeValueFrom = this.onChangeValueFrom.bind(this);
    this.onChangeValueTo = this.onChangeValueTo.bind(this);
    this.send = this.send.bind(this);

    this.state = {
      convert: {
        from: "",
        to: "",
        amount: 0,
      },
    };
  }

  onChangeValueAmount(e) {
    this.setState({ amount: e.target.value });
  }

  onChangeValueFrom(e) {
    this.setState({ from: e.target.value });
  }

  onChangeValueTo(e) {
    this.setState({ to: e.target.value });
  }

  send() {
    const data = {
      from: this.state.from,
      to: this.state.to,
      amount: this.state.amount,
    };

    this.props.coinConverter(data);
  }

  render() {
    return (
      <form>
        <div className="row justify-content-md-center">
          <div className="input-group input-group-lg">
            <input
              onChange={(e) => this.onChangeValueAmount(e)}
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <label htmlFor="selectFrom">From:</label>
            <ListaMoeda origem="from" onChange={this.onChangeValueFrom} />
          </div>

          <div className="col-md-6">
            <label htmlFor="selectTo">To:</label>
            <ListaMoeda origem="to" onChange={this.onChangeValueTo} />
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={this.send}
            className="btn btn-primary btn-lg btn-block"
          >
            Converter
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ coinConverter }, dispatch);
}

export default connect(null, mapDispatchToProps)(Formulario);
