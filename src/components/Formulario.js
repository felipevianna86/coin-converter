import React from "react";

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
          <select className="form-control" id="selectFrom">
            <option value="brl" label="$RS">
              BRL
            </option>
            <option value="usd" label="$USD" selected>
              USD
            </option>
          </select>
        </div>

        <div className="col-md-6">
          <label for="selectTo">To:</label>
          <select className="form-control" id="selectTo">
            <option value="brl" label="$RS">
              BRL
            </option>
            <option value="usd" label="$USD">
              USD
            </option>
          </select>
          <a href="#" className="btn btn-primary">
            Converter
          </a>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
