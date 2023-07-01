import React from "react";
import InitialVideo from "./video";

import './video.css'

const Home = () => {
  const [timer, setTimer] = React.useState(5);
  const [isVideoShow, setIsVideoShow] = React.useState(false);

  React.useEffect(() => {
    const timerSet = setInterval(() => {
      if (timer < 0) {
        clearInterval(timerSet);
        setIsVideoShow(true)
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerSet);
    };
  }, [timer]);
  console.log("========= render in home", timer);
  return (
    <React.Fragment>
      <div>HOMEdnfkjhdskjvbskbvk </div>
      <h1>{timer >= 0 ? timer : isVideoShow && <InitialVideo isVideoShow = {isVideoShow} CB={setIsVideoShow} />}</h1>
    </React.Fragment>
  );
};

export default Home;
