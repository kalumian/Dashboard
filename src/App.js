// import Libraries and Tools
import { BrowserRouter as Router, Route } from "react-router-dom";

// import page
import Dashboard from "./Components/Pages/Dashboard/dashboard";
import Home from "./Components/Pages/Home/Home";

//import style
import "./Styles/general.css";

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;
