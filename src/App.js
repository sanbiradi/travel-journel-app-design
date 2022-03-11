import React from "react";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import data from "./data";
export default function App() {
  let locations = data.map((item)=>{
    return(
      <MainContent key={item.id} item={item}/>
    )
  });

  return (
    <section>
      <Nav />
      <div className="container">
       {locations}
      </div>
    </section>
  );
}
