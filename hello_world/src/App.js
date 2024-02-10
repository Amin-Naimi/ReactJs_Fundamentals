import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      
      {/*<Greet name="Mohamed" lastName="Naimi">
        <p>This is children props</p>
      </Greet>
      
      <Greet name="Malika" lastName="Jali"></Greet>
      <Greet name="Redtha" lastName="Naimi"></Greet>
      
      <Hello name="Mohamed" lastName="Naimi"></Hello>
  <Hello name="Malika" lastName="Jali"></Hello>*/}

      <Message></Message>


    </div>
  );
}

export default App;
