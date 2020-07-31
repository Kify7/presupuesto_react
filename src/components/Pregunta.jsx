import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {
  // DEFINIR EL STATE
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // FUNCIÓN QUE LEE EL PRESUPUESTO
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // SUBMIT PARA DEFINIR PRESOPUESTO
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // VALIDAR
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
