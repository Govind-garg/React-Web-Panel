import React from "react";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const NoData = () => {
  const style = {
    fontSize: "70px",
    cursor: "pointer",
  };
  return (
    <div>
      <h1 className=" center">Pick a Course Immediately</h1>
      <TagFacesIcon style={style} />
    </div>
  );
};

export default NoData;
