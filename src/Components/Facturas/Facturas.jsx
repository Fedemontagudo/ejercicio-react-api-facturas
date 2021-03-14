import PropTypes from "prop-types";
import { facturaType } from "../../types/facturaType";
import React from "react";
import Factura from "./Factura/Factura";
import Totales from "./Totales";
import ClipLoader from "react-spinners/ClipLoader";

const Facturas = (props) => {
  const { facturas, cargando } = props;
  return (
    <>
      <table className="listado table table-striped table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th className="col-min">Num.</th>
            <th className="col-med">Fecha</th>
            <th className="col-concepto">Concepto</th>
            <th className="col-med">Base</th>
            <th className="col-max">IVA</th>
            <th className="col-med">Total</th>
            <th className="col-max">Estado</th>
            <th className="col-max">Vence</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map(factura => <Factura factura={factura} key={factura.id} />)}
        </tbody>
        <Totales baseTotal={props.baseTotal} ivaTotal={props.ivaTotal} totalAbsoluto={props.totalAbsoluto} />
      </table>
      <ClipLoader color={"red"} loading={cargando} size={150} /> :
    </>
  );
};

Facturas.propTypes = {
  facturas: PropTypes.arrayOf(PropTypes.shape(facturaType)).isRequired,
};

export default Facturas;
