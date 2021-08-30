import React from "react";
import PropTypes from "prop-types";
import { Button } from "@progress/kendo-react-buttons";

const RTXButtons = ({ selectedData, setSelectedData }) => {
  const onClick = ({ currentTarget: { innerText } }) => {
    setSelectedData(innerText);
  };

  return (
    <>
      <Button
        className={selectedData === "RX" && "selected"}
        primary={true}
        look="outline"
        onClick={onClick}
      >
        RX
      </Button>
      <Button
        className={selectedData === "TX" && "selected"}
        primary={true}
        look="outline"
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
