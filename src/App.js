import React, { useState } from 'react';
import Pregunta from './components/Pregunta'


function App() {
  // DEFINIR EL SATATE
  const[ presupuesto, guardarPresupuesto ] = useState(0);
  const[ restante, guardarRestante ] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante} 
          />  
          <div className="row">
            <div className="one-half column">
              1
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
