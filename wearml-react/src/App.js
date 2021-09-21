import Header from "./components/Header";
import { Button } from "./components/Button-style";
import ScriptTag from "react-script-tag";

const App = () => {
  return (
    <div className="container">
      <ScriptTag isHydrating={true} type="text/javascript" src
      <Header />
      <Button backgroundColor="red">Click this</Button>
      <Button backgroundColor="blue">Click that</Button>
    </div>
  );
};

export default App;
