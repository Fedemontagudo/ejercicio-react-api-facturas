import PropTypes from "prop-types";
import { useState } from "react";

const BuscaFacturas = (props) => {
  const { buscarNumHandler } = props;
  const [busqueda, setBusqueda] = useState("");

  const buscarNum = (input) => {
    setBusqueda(input);
    buscarNumHandler(input);
  };

  return (
     <div className="row">
        <div className="info-listado info-listado-top col text-right">
          <label className="pr-2" htmlFor="buscador">Buscar </label>
            <input
              onChange={e => buscarNum(e.target.value)}
              value={busqueda}
              id="buscador"
              type="text"
              className="form-control form-control-sm"
            />
        </div>
      </div>
  );
};

BuscaFacturas.propTypes = {
  buscarNumHandler: PropTypes.func.isRequired,
};

export default BuscaFacturas;
