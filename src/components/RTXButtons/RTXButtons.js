import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const RTXButtons = ({ selectedData, setSelectedData }) => {
  const onClick = ({ currentTarget: { innerText } }) => {
    setSelectedData(innerText);
  };

  return (
    <>
      <Button
        classToAdd={selectedData === "RX" ? "selected" : ""}
        onClick={onClick}
      >
        RX
      </Button>
      <Button
        classToAdd={selectedData === "TX" ? "selected" : ""}
        onClick={onClick}
      >
        TX
      </Button>
    </>
  );
};

RTXButtons.propTypes = {
  selectedData: PropTypes.string,
  setSelectedData: PropTypes.func,
};

export default RTXButtons;
