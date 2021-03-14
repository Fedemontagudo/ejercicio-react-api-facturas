import PropTypes from "prop-types";

export const facturaType = {
  id: PropTypes.number.isRequired,
  abonada: PropTypes.bool.isRequired,
  base: PropTypes.number.isRequired,
  concepto: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  numero: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  tipoIva: PropTypes.number.isRequired,
  vencimiento: PropTypes.string.isRequired
};
