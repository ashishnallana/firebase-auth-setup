import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/reset" Component={Reset} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
