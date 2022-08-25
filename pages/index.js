import { useState } from "react";
import Main from "../components/homepage/main";
import Welcoming from "../components/homepage/welcoming";

function Home() {
  const [showWelcoming, setShowWelcoming] = useState(false);

  function showWelcomingHandler() {
    setShowWelcoming(true);
  }

  const content = showWelcoming ? (
    <Main />
  ) : (
    <Welcoming onShowWelcoming={showWelcomingHandler} />
  );

  return <div className={styles.content}>{content}</div>;
}

const styles = {
  content: "flex h-full flex-col justify-center items-center text-4xl",
};

export default Home;
