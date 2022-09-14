/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import "./App.css";
// import { Container } from "react-bootstrap";
import BlogDetails from "./components/BlogDetails";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Blogs />
          </Route>
          <Route path='/Create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
