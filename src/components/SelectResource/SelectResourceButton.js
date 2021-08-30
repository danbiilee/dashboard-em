import React from "react";
import PropTypes from "prop-types";
import { Button } from "@progress/kendo-react-buttons";

const SelectResourceButton = ({ onToggleSelectModal }) => {
  return (
    <Button primary={true} look="outline" onClick={onToggleSelectModal}>
      리소스 선택
    </Button>
  );
};

SelectResourceButton.propTypes = {
  onToggleSelectModal: PropTypes.func,
};

export default SelectResourceButton;
