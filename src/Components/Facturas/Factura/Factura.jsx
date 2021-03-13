import React from "react";
import { DateTime } from "luxon";

const Factura = (props) => {
  const { id, numero, fecha, vencimiento, concepto, base, tipoIva, abonada } = props.factura;
  console.log(props);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{DateTime.fromMillis(parseInt(fecha)).setLocale("es").toLocaleString()}</td>
        <td>{concepto}</td>
        <td>{base} €</td>
        <td>{`${base * (1 + tipoIva) / 100} €`}</td>
        <td>{`${(base * (1 + tipoIva) / 100) + base} €`}</td>
        <td className={abonada ? "table-success" : "table-danger"}>{abonada ? "abonada" : "pendiente"}</td>
        <td>
          {!abonada ? `${DateTime.fromMillis(parseInt(vencimiento)).setLocale("es").toLocaleString()}
          faltan ${DateTime.now().diff(DateTime.fromMillis(parseInt(vencimiento)), "days")}
          ${DateTime.now().setLocale("es").toLocaleString()}
          `
            : ""
          }

        </td>
      </tr>
    </>
  );
};

export default Factura;
