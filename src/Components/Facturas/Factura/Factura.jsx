import React from "react";
import { DateTime } from "luxon";

const Factura = (props) => {
  const { numero, fecha, vencimiento, concepto, base, tipoIva, abonada } = props.factura;

  const vencimientoToString = DateTime.fromMillis(parseInt(vencimiento)).setLocale("es").toLocaleString();

  const diasDiff = () =>
    Math.round(DateTime.fromMillis(parseInt(vencimiento)).diff(DateTime.now(), "days").values.days);;

  const compoVencimiento = () => {
    const diasAbs = Math.abs(diasDiff());
    const diasDia = diasAbs === 1 ? "dia" : "dias";
    const faltanFalta = diasAbs === 1 ? "Falta" : "Faltan";

    if (diasDiff() > 0) {
      return `${vencimientoToString} (${faltanFalta} ${diasAbs} ${diasDia})`;
    } else if (diasDiff() < 0) {
      return `${vencimientoToString} (hace ${diasAbs} ${diasDia})`;
    } else {
      return "Ho paga hoy o muere";
    }
  };


  return (
    <>
      <tr>
        <td>{numero}</td>
        <td>{DateTime.fromMillis(parseInt(fecha)).setLocale("es").toLocaleString()}</td>
        <td>{concepto}</td>
        <td>{base} €</td>
        <td>{`${base * (1 + tipoIva) / 100} €`}</td>
        <td>{`${(base * (1 + tipoIva) / 100) + base} € (${tipoIva}%)`}</td>
        <td className={abonada ? "table-success" : "table-danger"}>{abonada ? "abonada" : "pendiente"}</td>
        <td className={diasDiff() >= 0 || abonada ? "table-success" : "table-danger"}>
          {!abonada ? `${compoVencimiento()}` : "-"}
        </td>
      </tr>
    </>
  );
};

export default Factura;
