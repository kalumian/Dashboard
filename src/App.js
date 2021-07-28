// import Libraries and Tools
import { BrowserRouter as Router, Route } from "react-router-dom";

// import page
import Dashboard from "./Components/Pages/Dashboard/dashboard";

//import style
import './Styles/general.css'
function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
