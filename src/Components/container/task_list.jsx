import React from 'react';
import { Info } from '../../models/info.class';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Info('Angelo','Mandros','mandros.angelof@pucp.edu.pe',false);

    // const changeState = (id) =>{
    //     console.log('TODO: Cambiar estado de una tarea')
    // }

    return (
        <div>
            <h1>
                Your Properties:
            </h1>
            {/* Aplicar un for/map para renderizar la lista */}
            <TaskComponent info={defaultTask}></TaskComponent>
        </div>
    );  
};

export default TaskListComponent;
