import React from "react";
import "./video.css"
const InitialVideo = ({isVideoShow, CB}) => {
  console.log(CB);
  
  return (
        <div className="video_container">
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/DAqxAqq_jhg?autoplay=1&clip=Ugkxvb5TzR-tACZ5kDp1OY8t25D5-UNi1XGr&amp;clipt=ENaXARiP6wI&"
            ></iframe>
            <button onClick={()=>CB(false)}>Close</button>
        </div>
   
  );
};

export default InitialVideo;
