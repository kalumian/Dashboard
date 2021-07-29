import { useState } from "react";

function Audience() {
  const [tabs , setTabs] = useState('Country')
  return (
    <section className="dashboard_item">
      <h2 className="title">Audience</h2>
      <div className="dashboard_item_content">
        <div className="audience">
          <ul>
            <li className={tabs === "Country" ? "active" : ""}  onClick={() => setTabs("Country")}>Country</li>
            <li className={tabs === "US States" ? "active" : ""} value="US States" onClick={() => setTabs("US States")}>US States</li>
            <li className={tabs === "Cities" ? "active" : ""} value="Cities" onClick={() => setTabs("Cities")}>Cities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Audience;
