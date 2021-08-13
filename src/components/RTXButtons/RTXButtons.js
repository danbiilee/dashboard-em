import React from "react";
import PropTypes from "prop-types";
import { Button } from "@progress/kendo-react-buttons";

const RTXButtons = ({ setSelectedData }) => {
  const onClick = ({ currentTarget: { innerText } }) => {
    setSelectedData(innerText);
  };

  return (
    <>
      <Button primary={true} look="outline" onClick={onClick}>
        RX
      </Button>
      <Button primary={true} look="outline" onClick={onClick}>
        TX
      </Button>
    </>
  );
};

RTXButtons.propTypes = {
  setSelectedData: PropTypes.func,
};

export default RTXButtons;
