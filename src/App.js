import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import EmailList from "./pages/EmailList/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <EmailList />
            </Route>
            <Route path="/mail">asd</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
