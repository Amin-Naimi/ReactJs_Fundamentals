import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/EventHandling/FunctionClick';
import ClassClick from './components/EventHandling/ClassClick';
import EventBind from './components/BindingEventHandlers/EventBind';
import ParentComponent from './components/Methodes as props/ParentComponent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';
import NameList from './components/ListRendering/NameList';

function App() {
  return (

    <div className="App">
      <NameList></NameList>
      {
      /*
      <UserGreeting></UserGreeting>
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
