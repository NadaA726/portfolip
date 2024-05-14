import React from "react";
function Home(){
    const Logout=()=>{
        localStorage.removeItem("login")
        window.location.reload()
    }
    
    const Delet=()=>{
        localStorage.removeItem("delet")
        window.location.reload()
    }
    return(
        <div>
            <h1 className="h1">Welcom TO Home Page</h1>
            <button onClick={Logout} className="logout">Logout</button>
            <br/>
            <button onClick={Delet} className="delet">Dlete</button>
        </div>
    );
}

export default Home