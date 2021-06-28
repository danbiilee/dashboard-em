import React, { useState, useEffect } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const day = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date(), 1000));
    return () => {
      clearInterval(id);
    };
  }, []);
  const getFormattedDate = (dateTime) => {
    let year = dateTime.getFullYear();
    let month = String(dateTime.getMonth() + 1).padStart(2, "0");
    let date = String(dateTime.getDate()).padStart(2, "0");
    let hour = String(dateTime.getHours()).padStart(2, "0");
    let minute = String(dateTime.getMinutes()).padStart(2, "0");
    let days = day[String(dateTime.getDay())];
    return `${year}-${month}-${date} ${days} ${hour}:${minute}`;
  };
  const formatDate = getFormattedDate(dateTime);
  return <div>{formatDate}</div>;
};

export default Clock;