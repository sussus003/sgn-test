import React, { useState, useEffect } from "react";

export default function page() {
  return (
    <div className="card" >
      <b style={{margin:"10px 0px"}}>Population Growth per country, 1950 to 2021</b>
      <div style={{margin:"10px 0px"}}>Click on the legend below to filter by continent</div>
      <div style={{margin:"10px 0px"}}>
        <p className="region">Region</p>
        <p
          style={{ padding:"6px",height:"10px",width:"10px" ,display:"inline",verticalAlign:"center" ,backgroundColor: "#5D47E9"}}
        ></p>
        <p className="inline">Asia</p>
        <p
          style={{ padding:"6px",height:"10px",width:"10px" ,display:"inline",verticalAlign:"center" ,backgroundColor: "#7F5EE6"}}
        ></p>
        <p className="inline">Europe</p>
        <p
          style={{ padding:"6px",height:"10px",width:"10px" ,display:"inline",verticalAlign:"center" ,backgroundColor: "#CD7A6F"}}
        ></p>
        <p className="inline">Africa</p>
        <p
          style={{ padding:"6px",height:"10px",width:"10px" ,display:"inline",verticalAlign:"center" ,backgroundColor: "#F2B23E"}}
        ></p>
        <p className="inline">Oceania</p>
        <p
          style={{ padding:"6px",height:"10px",width:"10px" ,display:"inline",verticalAlign:"center" ,backgroundColor: "#FDCE30"}}
        ></p>
        <p className="inline">Americas</p>
      </div>
      <div>0</div>
    </div>
  );
}
