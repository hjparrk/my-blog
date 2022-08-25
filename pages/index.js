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

  const style = showWelcoming ? styles.main : styles.welcome;

  return <div className={style}>{content}</div>;
}

const styles = {
  welcome: "flex h-full flex-col justify-center items-center text-4xl",
  main: "flex h-full flex-col justify-center items-start text-4xl ml-80",
};

export default Home;
