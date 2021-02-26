import Routes from "./Routes.js"
import MainNavbar from "./components/MainNavbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <MainNavbar/>
          <Switch>
            {
              Routes.map((value, index)=>
                value.component !== "" ? (
                  <Route exact path={value.path} component={value.component} />
                ):(
                  <></>
                )
              )
            }            
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
