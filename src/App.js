import { useEffect, useState } from "react";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./hooks/useFetch";
import Facturas from "./Components/Facturas/Facturas";

function App() {
  const [facturas, setFacturas] = useState([]);
  const [facturasFiltradas, setFacturasFiltradas] = useState([]);
  const { datos: facturasApi, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);
  const [baseTotal, setBaseTotal] = useState(0);
  const [ivaTotal, setIvaTotal] = useState(0);
  const [totalAbsoluto, setTotalAbsoluto] = useState(0);

  useEffect(() => {
    if (facturasApi) {
      const datosFactura = facturasApi.filter(facturaAPI => facturaAPI.tipo === "ingreso");
      setFacturas(datosFactura);
      setFacturasFiltradas(datosFactura);
    }
  }, [facturasApi]);

  const buscarNum = (numBusqueda) => {
    setFacturasFiltradas(facturas.filter(factura => factura.numero.includes(numBusqueda)));
  };

  useEffect(() => {
    if (facturasFiltradas.length > 0) {
      setBaseTotal(facturasFiltradas.map(factura => factura.base).reduce((acc, base) => acc + base));
      setIvaTotal(facturasFiltradas.map(factura => factura.base * (factura.tipoIva / 100)).reduce((acc, iva) => acc + iva));
      setTotalAbsoluto(Math.round(facturasFiltradas.map(factura => factura.base + factura.base * (factura.tipoIva / 100)).reduce((acc, total) => acc + total) * 100) / 100);
    }
  }, [facturasFiltradas]);

  return (
    <>
      <section className="principal container-fluid">
        <header className="cabecera row">
          <h2 className="col">Listado de ingresos</h2>
        </header>
        <main>
          <BuscaFacturas buscarNumHandler={buscarNum} />
          <Facturas totalAbsoluto={totalAbsoluto} baseTotal={baseTotal} ivaTotal={ivaTotal} facturas={facturasFiltradas} cargando={cargando} />
        </main>

      </section>

    </>
  );
}

export default App;
