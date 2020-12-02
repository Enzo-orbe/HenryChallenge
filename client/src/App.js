import {BrowserRouter as Router, Route} from "react-router-dom";
import SearchBar from "./components/SearchBar"
import Catalog from "./components/Catalog"
import {useSelector} from "react-redux";
import Filtrado from "./components/Filtrado.js";
import './App.css';
import Bienvenidos from "./components/Bienvenidos";

function App() {
  const Products = useSelector(state => state.products)

  return (
    <Router>
      <Route exact path="/" component={SearchBar} />
      {Products.length ? <Filtrado /> : <Bienvenidos />}
      <Route exact path="/" component={Catalog} /> 
    </Router>
  );
}

export default App;
