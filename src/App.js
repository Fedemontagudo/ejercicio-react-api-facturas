import { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch";
console.log(useFetch);
function App() {
  const { datos, cargando } = useFetch(`${process.env.REACT_APP_API_URL}`);
  useEffect(() => {
    console.log(datos);
  }, [datos]);
  return (
    <>
      <h1>resultados</h1>
    </>
  );
}

export default App;
