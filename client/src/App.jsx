import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import CoursePage from "./components/pages/course/CoursePage";
import ErrorPage from "./components/pages/error/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:campus/course/:code" exact component={CoursePage} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
