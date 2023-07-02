 
import React from "react";
import  ReactDOM  from "react-dom";

/* Q1.create a nested header element using React.create Element(h1,h2,h2) inside a div with class title 

const heading = React.createElement("div" ,{className:"title"},[
    React.createElement("h1", {}, "This is h1 tag "),
    React.createElement("h2" , {} , "This is h2 tag"),
    React.createElement("h3",{} , "This is h3 tag ")
] );

const root = ReactDOM.createRoot(document.getElementById("root"));
    

root.render(heading);*/


/* Q2.Create the  same element using jsx

const header = (
    <div className="title">
        <h1>This is h1 tag </h1>
        <h2>This is h1 tag </h2>
        <h3>This is h1 tag </h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header); */


//Q3. create a functional component with attribute in jsx   ??

/* 
const Heading = ()  => {
    return (
        <>
            <div className="title">
            <h1 style ={{color:"red"}}>This is h1 tag </h1>
            <h2 style ={{color:"green"}}>This is h1 tag </h2>
             <h3 style ={{color:"blue"}}>This is h1 tag </h3>

            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading />)

*/

// Q4. composition component 

const TitleComponent = () => {
    return<h1>This is title</h1>
}


const Header = () => {
    return (
        <>
            <div id="container">
                <TitleComponent />
                <TitleComponent />
                <TitleComponent />
            </div>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />);


