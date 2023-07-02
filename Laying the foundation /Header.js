import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo.jpg";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left">
               <img src={Logo} alt="logo"/>
                </div>
                <div className="middle">
                    <input className="input" type ="text"  placeholder="Search anything ----!" />
                    <button type="submit">Submit</button>
                </div>
            </header>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)
