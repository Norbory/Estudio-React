import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GrettingF = (props) => {
    // Breve introduccion de useState
    // const[variable, metodo para actualizarla] = useState(valor inicial)
    const [age, setage] = useState(29);
    
    const birthday = () => {
        // actualizamos age
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                HOLA {props.name} desde componente funcional
            </h1>
            <h2>
                Tu edad es de {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GrettingF.propTypes = {
    name: PropTypes.string,
};


export default GrettingF;
