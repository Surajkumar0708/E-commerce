import React from "react";
import "./toast.css"

const Toast = ({setIsToastShow, msg}) => {
    React.useEffect(() => {
            setTimeout(() => {
                setIsToastShow?.(false)
                console.log("========== isToastShow",);
            }, 5000);
    },[])
    return(
        <div>
            <div className="toast_container">{msg}</div>
            <div className="progress_bar"></div>
        </div>
    )
};

export default Toast;