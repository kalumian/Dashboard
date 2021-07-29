import React from "react";

function Comments_likes_ratio() {
  return (
    <section className="dashboard_item">
      <h2 className="title">Comments likes ratio</h2>
      <div className="dashboard_item_content">
        <div className="Comments likes ratio">
          <p className="state">
            <i class="fas fa-check-circle"></i>Good
          </p>
          <p>
            Example inuencer receives 0.3 comments per 100 likes, similar
            accounts receive 0.9 comments per 100 likes .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Comments_likes_ratio;
