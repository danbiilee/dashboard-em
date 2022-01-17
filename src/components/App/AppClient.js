import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../../context/Theme";
import loadable from "@loadable/component";
import Header from "../../containers/Header";
import SelectResourceModal from "../SelectResource";
import { useToggle } from "../../hooks/useToggle";
import { resourceData } from "../../pages/NMS/TestData";

const SMS = loadable(() => import("../../pages/SMS"));
const NMS = loadable(() => import("../../pages/NMS"));

const AppClient = () => {
  const [showModal, onToggleModal] = useToggle(false);
  const [resources, setResources] = useState({
    sms: [],
    nms: resourceData,
  }); // 임시

  return (
    <ThemeProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={SMS} />
        <Route
          path="/nms"
          render={() => (
            <NMS onToggleModal={onToggleModal} resources={resources} />
          )}
        />
      </Switch>
      {showModal && (
        <SelectResourceModal
          onToggleModal={onToggleModal}
          resources={resources}
          setResources={setResources}
        />
      )}
    </ThemeProvider>
  );
};

export default AppClient;
