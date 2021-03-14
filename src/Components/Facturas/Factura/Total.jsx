import PropTypes from "prop-types";

const Total = props => {
  const { baseTotal, ivaTotal, totalAbsoluto } = props;
  return (
    <tfoot>
      <tr className="totales">
        <th className="text-right" colSpan="3">Totales:</th>
        <td><span className="total-bases"></span>{`${baseTotal} €`}</td>
        <td><span className="total-ivas"></span>{`${ivaTotal} €`}</td>
        <td><span className="total-totales"></span>{`${totalAbsoluto} €`}</td>
        <td colSpan="2"></td>
      </tr>
    </tfoot>
  );
};

Total.propTypes = {
  baseTotal: PropTypes.number.isRequired,
  ivaTotal: PropTypes.number.isRequired,
  totalAbsoluto: PropTypes.number.isRequired
};
export default Total;
