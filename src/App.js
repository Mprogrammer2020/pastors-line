import "./App.css";
import { Main } from "./main/Main";
import { Routing } from "./routing/Routing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* Main component with the routing component */}
      <Main>
        {/* Routing component have routes of the app */}
        <Routing />
      </Main>
    </div>
  );
}

export default App;
