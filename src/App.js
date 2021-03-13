import { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch";

function App() {
  const { datos, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(datos);
  }, [datos]);
  return (
    <>
      <h1>resultados </h1>
    </>
  );
}

export default App;
