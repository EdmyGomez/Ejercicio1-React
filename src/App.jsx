import Index from "Pages/Index";
import RhodesianInfoPage from "Pages/Rhodesian";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "Styles/styles.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Rutas */}
          <Route path="/Rhodesian">
            <RhodesianInfoPage />
          </Route>
          {/* Rutas */}
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
