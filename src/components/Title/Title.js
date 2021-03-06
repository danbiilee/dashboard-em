import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ name }) => {
  return (
    <h2
      className={`${styles.title} ${name === "알람콘솔" ? styles.alarm : ""}`}
    >
      {name}
    </h2>
  );
};

Title.propTypes = {
  name: PropTypes.string,
};
export default Title;
