import React from 'react'
import PropTypes from "prop-types";

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
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto
