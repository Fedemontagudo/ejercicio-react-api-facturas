import React from "react";
import Factura from "./Factura/Factura";
import Total from ".Factura/Total";

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
        <Total baseTotal={baseTotal} ivaTotal={ivaTotal} TotalTotal={totalAbsoluto} />
      </table>
    </>
  );
};

export default Facturas;
