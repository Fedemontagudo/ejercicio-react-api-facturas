import { useEffect, useState } from "react";
import BuscaFacturas from "./Components/Buscador";
import useFetch from "./hooks/useFetch";

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
      <section class="principal container-fluid">
    <header class="cabecera row">
      <h2 class="col">Listado de ingresos</h2>
    </header>
    <main>
        <BuscaFacturas />
      <table class="listado table table-striped table-bordered table-hover">
        <thead class="thead-light">
          <tr>
            <th class="col-min">Num.</th>
            <th class="col-med">Fecha</th>
            <th class="col-concepto">Concepto</th>
            <th class="col-med">Base</th>
            <th class="col-max">IVA</th>
            <th class="col-med">Total</th>
            <th class="col-max">Estado</th>
            <th class="col-max">Vence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1000</td>
            <td>13/06/2018</td>
            <td>App Angular</td>
            <td>3000€</td>
            <td>630€ (21%)</td>
            <td>3630€</td>
            <td class="table-success">Abonada</td>
            <td class="table-success">-</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>13/06/2018</td>
            <td>App Angular</td>
            <td>3000€</td>
            <td>630€ (21%)</td>
            <td>3630€</td>
            <td class="table-success">Abonada</td>
            <td class="table-success">-</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>13/06/2018</td>
            <td>App Angular</td>
            <td>3000€</td>
            <td>630€ (21%)</td>
            <td>3630€</td>
            <td class="table-danger">Pendiente</td>
            <td class="table-danger">28/2/2021 (hace x días)</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>13/06/2018</td>
            <td>App Angular</td>
            <td>3000€</td>
            <td>630€ (21%)</td>
            <td>3630€</td>
            <td class="table-danger">Pendiente</td>
            <td class="table-success">1/4/2021 (faltan x días)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th class="text-right" colspan="3">Totales:</th>
            <td>5000€</td>
            <td>5000€</td>
            <td>5000€</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </main>
  </section>

    </>
  );
}

export default App;
