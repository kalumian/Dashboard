// import Libraries and Tools
import { Helmet } from "react-helmet";

// import styles & images & icons
import "./dashboard.css";

//import component
import Header from "../../Dashboard-Components/Header/Header";
import Navbar from "../../Dashboard-Components/Navbar/Navbar";
import Sidebar from "../../Dashboard-Components/Sidebar/Sidebar";
import Dashboard_sections from "../../Dashboard-Components/Dashboard Items/Dashboard_Sections";
function Dashboard() {
  return (
    <>
      <Helmet>
        <title>FLUENCIFY | Dashboard</title>
      </Helmet>
      <div className="dashboard">
        <Header />
        <div className="middle-page">
          <Sidebar />
          <main className="dashboard-content">
            <Navbar />
            <Dashboard_sections/>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
