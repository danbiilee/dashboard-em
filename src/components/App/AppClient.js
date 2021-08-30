import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../../context/Theme";
import Header from "../../containers/Header";
import SMS from "../../pages/SMS";
import NMS from "../../pages/NMS";
import { SelectResourceModal } from "../../components/SelectResource";
import { useToggle } from "../../hooks/useToggle";

const AppClient = () => {
  const [showSelectModal, onToggleSelectModal] = useToggle(false);

  return (
    <ThemeProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={SMS} />
        <Route
          path="/nms"
          render={() => (
            <NMS
              showSelectModal={showSelectModal}
              onToggleSelectModal={onToggleSelectModal}
            />
          )}
        />
      </Switch>
      {showSelectModal && (
        <SelectResourceModal onToggleSelectModal={onToggleSelectModal} />
      )}
    </ThemeProvider>
  );
};

export default AppClient;
