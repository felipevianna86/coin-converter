import React from "react";
import ListaMoeda from "./ListaMoedas";

const Formulario = (props) => {
  return (
    <form>
      <div className="row justify-content-md-center">
        <div className="input-group input-group-lg">
          <input type="number" className="form-control" />
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-6">
          <label for="selectFrom">From:</label>
          <ListaMoeda />
        </div>

        <div className="col-md-6">
          <label for="selectTo">To:</label>
          <ListaMoeda />
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Converter
        </button>
      </div>
    </form>
  );
};

export default Formulario;
