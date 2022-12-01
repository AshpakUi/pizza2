import "./App.css";
import Navcompo from "./component/Navcompo";
import Roution from "./component/Roution";
import { createContext } from "react";
export const Context = createContext();

function App() {
  return (
    <div>
      <Roution />
    </div>
  );
}

export default App;
