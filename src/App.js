import Boxes from "./components/boxes/boxes.js";
import Dedicated from "./components/dedicated";
import Header from "./components/header";
import Nav from "./components/nav";
import Prices from "./components/Prices.js";
import Pricingtitle from "./components/pricingtitle.js";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Dedicated />
      <Services />
      <Boxes />
      <Pricingtitle />
      <Prices/>
    </div>
  );
}

export default App;
