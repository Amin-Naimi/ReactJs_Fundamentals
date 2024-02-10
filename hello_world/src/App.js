import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="Malika" lastName="Jali"></Greet>
      <Hello name="Mohamed" lastName="Naimi"></Hello>





      {
      /*
            <Counter></Counter>

      <Greet name="Mohamed" lastName="Naimi">
        <p>This is children props</p>
      </Greet>
      
      <Greet name="Redtha" lastName="Naimi"></Greet>
      
  <Hello name="Malika" lastName="Jali"></Hello>
  <Message></Message>*/}


    </div>
  );
}

export default App;
