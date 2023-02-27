import logo from './logo.svg';
import './App.css';
// import Grettings from './Components/pure/grettings';
// import GrettingF from './Components/pure/grettingF';
import TaskListComponent from './Components/container/task_list';
import Contacto from './Components/pure/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* COMPONENTE PROPIO Greeting.jsx*/}
        {/* <Grettings name="Angelo"></Grettings> */}
        {/* <GrettingF name="Angelo"></GrettingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <Contacto name={'Angelo'} lastname={'Mandros'} email={'mandros.angelof@pucp.edu.pe'} conect={false}></Contacto>
        
      </header>
    </div>
  );
}

export default App;
