const BuscaFacturas = () => {
  return (
     <div className="row">
        <div className="info-listado info-listado-top col text-right">
          <label className="pr-2" htmlFor="buscador">Buscar </label>
            <input id="buscador" type="text" className="form-control form-control-sm" />
        </div>
      </div>
  );
};

export default BuscaFacturas;
