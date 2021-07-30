import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(history.push("/dashboard"), 10000);
  }, []);

  return <div>test</div>;
}

export default Home;
