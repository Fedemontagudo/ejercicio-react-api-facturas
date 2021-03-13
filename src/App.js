import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./Hooks/useFetch";

function App() {
  const { datos, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(datos);
  }, [datos]);
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
