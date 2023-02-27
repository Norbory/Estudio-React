import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { Info } from '../../models/info.class';

const TaskComponent = ({info}) => {

    const [est, setest] = useState(false);
    
    const estado = () => {
        setest(!est)
    }

    info.conect = est;

    return (
        
        <div>
            <h2>
                Nombre: {info.name}
            </h2>
            <h3>
                Apellido: {info.lastname}
            </h3>
            <h4>
                Email: {info.email}
            </h4>
            <h5>
                Worker is: {info.conect ? 'ON LINE':'OUT OF LINE'}
            </h5>
            <button onClick={estado}>
                ESTADO DEL TRABAJADOR
            </button>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    info: PropTypes.instanceOf(Info),
};


export default TaskComponent;
