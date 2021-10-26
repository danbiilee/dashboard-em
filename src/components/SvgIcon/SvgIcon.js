import React from "react";
import PropTypes from "prop-types";
import { SvgIcon as KendoSvgIcon } from "@progress/kendo-react-common";

const SvgIcon = ({ icon }) => <KendoSvgIcon icon={icon} />;

SvgIcon.propTypes = {
  icon: PropTypes.object,
};

export default React.memo(SvgIcon);
