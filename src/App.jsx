import Layout from "layout/Layout";
import BorderCollieinfopage from "Pages/bordercollie";
import Index from "Pages/Index";
import RhodesianInfoPage from "Pages/Rhodesian";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "Styles/styles.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Switch>
          {/* Rutas */}
          <Route path="/Rhodesian" >
            <RhodesianInfoPage />
          </Route>
          {/* Ruta del Border Collie */}
          <Route path="/bordercollie" >
            <BorderCollieinfopage/>
          </Route>
          {/* Rutas */}
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </div>
  );
}



export default App;
