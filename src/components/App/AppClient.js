import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../containers/Header";
import SMS from "../../pages/SMS";
import NMS from "../../pages/NMS";

const AppClient = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/sms" component={SMS} />
        <Route path="/nms" component={NMS} />
      </Switch>
    </>
  );
};

export default AppClient;
