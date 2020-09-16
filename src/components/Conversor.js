import React from "react";
import { connect } from "react-redux";
import Formulario from "./Formulario";

const Conversor = (props) => {
  return (
    <div className="content">
      <div className="row justify-content-md-center">
        <div className="card text-center w-50">
          <div className="card-header bg-info">Câmbio Natal</div>
          <Formulario />
          <div className="card-footer text-light bg-dark">
            {props.converter.quotes &&
              props.converter.quotes[Object.keys(props.converter.quotes)[0]]}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { converter: state.converter };
}

export default connect(mapStateToProps, null)(Conversor);
