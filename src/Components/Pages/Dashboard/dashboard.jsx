// import Libraries and Tools
import { Helmet } from "react-helmet";

// import styles & images & icons
import "../../../Styles/dashboard.css";

//import component
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Stats_Cards from "./Stats_Cards";
import Dashboard_item from './Dashboard_item'
import Audience_Growth from "./Audience_Growth";
import Slider_Similar_Accounts from "./Slider_Similar_Accounts";
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
            <section className="dashboard-sections">
                <Stats_Cards/>
                <Dashboard_item Components={Audience_Growth} title="Audience Growth"/>
                <Dashboard_item Components={Audience_Growth} title="Engagement"/>
                <Dashboard_item Components={Audience_Growth} title="Comments/likes ratio"/>
                <Dashboard_item Components={Audience_Growth} title="Audience"/>
                <Slider_Similar_Accounts/>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
