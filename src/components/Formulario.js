import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListaMoeda from "./ListaMoedas";

import { coinConverter } from "../actions";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convert: {},
    };
  }

  onChangeValue(e) {}

  render() {
    return (
      <form>
        <div className="row justify-content-md-center">
          <div className="input-group input-group-lg">
            <input
              onChange={(e) => this.onChangeValue(e)}
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <label htmlFor="selectFrom">From:</label>
            <ListaMoeda origem="from" />
          </div>

          <div className="col-md-6">
            <label htmlFor="selectTo">To:</label>
            <ListaMoeda origem="to" />
          </div>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Converter
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ coinConverter, dispatch });
}

export default connect(null, mapDispatchToProps)(Formulario);
