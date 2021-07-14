import Header from "./Header";
import Content from './Content'
import Copyright from "./Copyright";
import Features from "./Features";
import Contact from "./Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/">
        <Content />
      </Route>
      <Route exact path="/Features">
        <Features />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Copyright />
    </div>
  );
}

export default App;
