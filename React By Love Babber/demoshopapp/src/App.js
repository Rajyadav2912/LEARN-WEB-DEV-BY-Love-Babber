import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      Hello World
      <Item date="20" month="january" year="2001"></Item>
      <Item date="29" month="December" year="2002"></Item>
      <Item date="26" month="August" year="2201"></Item>
    </div>
  );
}

export default App;
