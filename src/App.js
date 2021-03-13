import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./Hooks/useFetch";

function App() {
  const [facturas, setFacturas] = useState([]);
  const { datos: facturasApi } = useFetch(`${process.env.REACT_APP_API_URL}`);

  useEffect(() => {
    if (facturasApi) {
      setFacturas(facturasApi.filter(facturaAPI => facturaAPI.tipo === "ingreso"));
    }
  }, [facturasApi]);

  return (
    <>
      <Container as="section" fluid className="principal">
        <Row as="header" className="cabecera">
          <Col>
            <h2>Listado de facturas</h2>
          </Col>
        </Row>
        <main>
          <BuscaFacturas></BuscaFacturas>
        </main>
      </Container>

    </>
  );
}

export default App;
