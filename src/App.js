import { useEffect, useState } from "react";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./hooks/useFetch";
import Facturas from "./Components/Facturas/Facturas";

function App() {
  const [facturas, setFacturas] = useState([]);
  const { datos: facturasApi, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);

  useEffect(() => {
    if (facturasApi) {
      setFacturas(facturasApi.filter(facturaAPI => facturaAPI.tipo === "ingreso"));
    }
  }, [facturasApi]);

  return (
    <>
      <section className="principal container-fluid">
        <header className="cabecera row">
          <h2 className="col">Listado de ingresos</h2>
        </header>
        <main>
          <BuscaFacturas />
          <Facturas facturas={facturas} cargando={cargando} />
        </main>
      </section>

    </>
  );
}

export default App;
