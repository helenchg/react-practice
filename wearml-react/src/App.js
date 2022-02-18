import Header from "./components/Header";
import { Button } from "./components/Button-style";

//import "wearml/wearml_engine";
import wearML from "wearml/wearml_engine";

window.wearML = wearML;

//wearML.setCommandSet("menu");
const App = () => {
  return (
    <div className="container">
      <form>
        First name:{" "}
        <input
          type="text"
          name="fname"
          data-wml-speech-command="Enter First Name"
          data-wml-style=".overlay"
        />
      </form>
      <Header />
      <Button backgroundColor="red">Click this</Button>
      <Button backgroundColor="blue">Click that</Button>
    </div>
  );
};

export default App;
