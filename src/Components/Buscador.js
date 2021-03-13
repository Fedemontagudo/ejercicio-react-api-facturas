import { Row, Col, Form } from "react-bootstrap";

const BuscaFacturas = () => {
  return (
    <Row>
      <Col className="info-listado info-listado-top text-right">
        <Form.Label>
          Buscar
            <Form.Control type="text" placeholder="Num de factura" />
        </Form.Label>
      </Col>
    </Row>
  );
};

export default BuscaFacturas;
