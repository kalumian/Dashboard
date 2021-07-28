import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "./Card";

function Stats_Cards() {
  return (
    <section className="stats_cards">
      <div className="stats_cards_header">
        <h2 className="title">Instagram Stats Overview</h2>
        <select>
          <option value="">Last 30 Day</option>
          <option value="">Last 1 Month</option>
          <option value="">Last 3 Month</option>
          <option value="">Last 1 Year</option>
        </select>
      </div>
      <div className="stats_cards_content">
        <div className="cards">
          <Card
            title="Media Posts(Last 30 day)"
            count="21.2K"
            state="less posts then usual"
            color="138 43 226"
            icon="fab fa-instagram"
          />
          <Card
            title="Followers(Last 30 Day)"
            count="21.2K"
            state="follower growth"
            color="60 80 189"
            icon="fas fa-users"
          />
          <Card
            title="Following(Last 30 day)"
            count="21.2K"
            state="following growth"
            color="255 217 0"
            icon="fas fa-user-plus"
          />
          <Card
            title="Quality Audience"
            count="46%"
            state="less posts then usual"
            color="245 0 57"
            icon="fas fa-fingerprint"
          />
          <Card
            title="Authentic Engagement"
            count="64.2%"
            state="good"
            color="41 196 45"
            icon="fas fa-comment-dots"
          />
          <Card
            title="Audience Quality Score"
            count="81%"
            state="pefect quality score"
            color="78 105 62"
            icon="fas fa-eye"
          />
        </div>
      </div>
    </section>
  );
}

export default Stats_Cards;
