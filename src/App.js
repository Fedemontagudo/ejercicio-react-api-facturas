import { useEffect, useState } from "react";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./hooks/useFetch";
import Facturas from "./Components/Facturas/Facturas";
import Total from "./Components/Facturas/Factura/Total";

function App() {
  const [facturas, setFacturas] = useState([]);
  const { datos: facturasApi, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);
  const [baseTotal, setBaseTotal] = useState(0);
  const [ivaTotal, setIvaTotal] = useState(0);
  const [totalAbsoluto, setTotalAbsoluto] = useState(0);

  useEffect(() => {
    if (facturasApi) {
      setFacturas(facturasApi.filter(facturaAPI => facturaAPI.tipo === "ingreso"));
    }
  }, [facturasApi]);

  useEffect(() => {
    if (facturas.length > 0) {
      setBaseTotal(facturas.map(factura => factura.base).reduce((acc, base) => acc + base));
      setIvaTotal(facturas.map(factura => factura.base * (factura.tipoIva / 100)).reduce((acc, iva) => acc + iva));
      setTotalAbsoluto(Math.round(facturas.map(factura => factura.base + factura.base * (factura.tipoIva / 100)).reduce((acc, total) => acc + total) * 100) / 100);
    }
  }, [facturas]);

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
