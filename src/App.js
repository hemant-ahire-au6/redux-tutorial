import Header from "./container/Header"
import ProductDetails from './container/ProductDetails'
import ProductListing from './container/ProductListing'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ProductListing/>
          </Route>

          <Route path="/product/:productId">
            <ProductDetails/>
          </Route>

          <Route>
            404 not found
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App; 

