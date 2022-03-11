import React from "react";
export default function MainContent(pros) {
  return (
      <div className="locationList">
        <img src={`./images/${pros.item.imageUrl}`}  className="loca-img"/>
        <div className="information">
            <div className="tagline">
                <img src="./images/location.png"/>
                <span className="japan">{pros.item.location}</span>
                <a href={`${pros.item.googleMapsUrl}`} className="maps">View on Google Maps</a>
            </div>
            <h2>{pros.item.title}</h2>
            <h4 className="date">{pros.item.startDate} - {pros.item.endDate}</h4>
            <p>{pros.item.description}</p>
        </div>
      </div>
  );
}
