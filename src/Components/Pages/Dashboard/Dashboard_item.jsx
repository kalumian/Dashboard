
function Dashboard_item({Components, title}) {
  return (
    <section className="dashboard_item">
      <h2 className="title">{title}</h2>
      <div className="dashboard_item_content">{Components}</div>
    </section>
  );
}

export default Dashboard_item;
