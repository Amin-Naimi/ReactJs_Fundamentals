import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';

function App() {
  return (
    
    <div className="App">
      <UserGreeting></UserGreeting>
      {
      /*
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>      
      <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <Greet name="Malika" lastName="Jali"></Greet>
      <Hello name="Mohamed" lastName="Naimi"></Hello>
      <Counter></Counter>
      <Message></Message>      
      <Greet name="Mohamed" lastName="Naimi">
        <p>This is children props</p></Greet>
      <Greet name="Redtha" lastName="Naimi"></Greet>
      <Hello name="Malika" lastName="Jali"></Hello>
  */}


    </div>
  );
}

export default App;
