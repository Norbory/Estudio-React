import React from 'react';
import PropTypes from 'prop-types';


const Contacto = (props) => {
    return (
        <div>
            <h2>
                Nombre: {props.name}
            </h2>
            <h3>
                Apellido: {props.lastname}
            </h3>
            <h4>
                Email: {props.email}
            </h4>
            <h5>
                Worker is: {props.conect ? 'ON LINE':'OUT OF LINE'}
            </h5>
        </div>
    );
};


Contacto.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    conect: PropTypes.bool,
};


export default Contacto;
