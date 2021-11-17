
import logo from './logo.svg';
import './App.css';
import { Message } from './Message';


const App = () => {
  const name = "Vasja";
  return (
    <div >
        <Message name={name}/>  
    </div>
  );
}

export default App;
