import React from "react";

function Engagement() {
  return (
    <section className="dashboard_item">
      <h2 className="title">Engagement</h2>
      <div className="dashboard_item_content">
        <div className="engagement">
          <h3>Engagement rate</h3>
          <p className="state">
          <i class="fas fa-check-circle"></i>4.2% -Very high
          </p>
          <p>
            About 10% of inuencers in the segment of 50K - 250K followers have a
            higher engagement. The average engagement for this segment is 2.5%.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Engagement;
