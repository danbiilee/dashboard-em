import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Header from "../../containers/Header";
import SelectResourceModal from "../SelectResource";
import { useToggle } from "../../hooks/useToggle";
import { useResource } from "../../context/Resource";

const SMS = loadable(() =>
  import(/* webpackChunkName: "sms" */ "../../pages/SMS")
);
const NMS = loadable(() =>
  import(/* webpackChunkName: "nms" */ "../../pages/NMS")
);

const AppClient = () => {
  const [showModal, onToggleModal] = useToggle(false);
  const resources = useResource();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={SMS} />
        <Route
          path="/nms"
          render={() => (
            <NMS onToggleModal={onToggleModal} resources={resources?.nms} />
          )}
        />
      </Switch>
      {showModal && <SelectResourceModal onToggleModal={onToggleModal} />}
    </>
  );
};

export default AppClient;
