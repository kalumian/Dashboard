import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "./Card";

function Stats_Cards() {
  const [selectValue, SetSelectValue] = useState(30);
  return (
    <section className="stats_cards">
      <div className="stats_cards_header">
        <h2 className="title">Instagram Stats Overview</h2>
        <select onChange={(e) => SetSelectValue(e.target.value)}>
          <option value={30}>Last 30 Day</option>
          <option value={90}>Last 3 Month</option>
          <option value={100}>Last 6 Month</option>
          <option value={120}>Last 1 Year</option>
        </select>
      </div>
      <div className="stats_cards_content">
        <div className="cards">
          <Card
            title="Media Posts(Last 30 day)"
            count={`${selectValue * 7}K`}
            state="less posts then usual"
            color="138 43 226"
            icon="fab fa-instagram"
            rate="0.4"
          />
          <Card
            title="Followers(Last 30 Day)"
            count={`${selectValue * 7}K`}
            state="follower growth"
            color="60 80 189"
            icon="fas fa-users"
            rate="22.4"
          />
          <Card
            title="Following(Last 30 day)"
            count={`${selectValue * 7}K`}
            state="following growth"
            color="255 217 0"
            icon="fas fa-user-plus"
            rate="22.4"
          />
          <Card
            title="Quality Audience"
            count={`${selectValue * 0.6}%`}
            state="less posts then usual"
            color="245 0 57"
            icon="fas fa-fingerprint"
            rate="0.4"
          />
          <Card
            title="Authentic Engagement"
            count={`${selectValue * 0.3}%`}
            state="good"
            color="41 196 45"
            icon="fas fa-comment-dots"
            rate="12.4"
          />
          <Card
            title="Audience Quality Score"
            count={`${selectValue * 0.8}%`}
            state="pefect quality score"
            color="78 105 62"
            icon="fas fa-eye"
            rate="22.4"
          />
        </div>
      </div>
    </section>
  );
}

export default Stats_Cards;
