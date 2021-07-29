// import Libraries and Tools
import { Helmet } from "react-helmet";

// import styles & images & icons
import "../../../Styles/dashboard.css";

//import component
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Stats_Cards from "./Stats Cards/Stats_Cards";
import Audience_Growth from "./Dashboard Items/Audience_Growth";
import Slider_Similar_Accounts from "./Dashboard Items/Slider_Similar_Accounts";
import Engagement from './Dashboard Items/Engagement'
import Comments_likes_ratio from './Dashboard Items/Comments_likes_ratio'
import Audience from './Dashboard Items/Audience'
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
                <Audience_Growth/>
                <Engagement/>
                <Comments_likes_ratio/>
                <Audience/>
                <Slider_Similar_Accounts/>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
