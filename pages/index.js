import { useState } from "react";
import Welcoming from "../components/homepage/welcoming";

function Home() {
  const [showWelcoming, setShowWelcoming] = useState(false);

  function showWelcomingHandler() {
    setShowWelcoming(true);
  }

  return (
    <>
      <div className="flex h-full flex-col justify-center items-center text-4xl">
        {!showWelcoming && <Welcoming onShowContent={showWelcomingHandler} />}
      </div>
      {showWelcoming && (
        <h1 className="items-center justify-center flex mt-80">Content here</h1>
      )}
    </>
  );
}

export default Home;
