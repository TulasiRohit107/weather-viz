import React from "react";

const cityNameField = {
  orderRadius: "15px",
  borderColor: "#73B5F2",
  width: "334px",
  height: "42px"
}

function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
      style={cityNameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;