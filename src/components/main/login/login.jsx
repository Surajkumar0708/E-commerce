import React from "react";

const Login = () => {
    const [usn, setUsn] = React.useState("");
    const [pass, setPass] = React.useState("");
    const loginHandle = (e) => {
        e.preventDefault();
        if(usn && pass){
            localStorage.setItem("usn", usn)
            window.location.href = "http://localhost:3000/"
            // window.location.reload()
        }
    }
    return(
        <form onSubmit={loginHandle}>
            <div>
                <label htmlFor="usn">Username</label>
                <input id="usn" type="text"  onChange={(e) => setUsn(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input id="pass" type="password" onChange={(e) => setPass(e.target.value)} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login;