import React from 'react'

const Gasto = ({gasto}) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
            </p>

    <span className="gastolip">${gasto.cantidad}</span>

        </li>
    )
}

export default Gasto
