import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../../context/Theme";
import Header from "../../containers/Header";
import SMS from "../../pages/SMS";
import NMS from "../../pages/NMS";

const AppClient = () => {
  return (
    <ThemeProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={SMS} />
        <Route path="/nms" component={NMS} />
      </Switch>
    </ThemeProvider>
  );
};

export default AppClient;
