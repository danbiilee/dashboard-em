import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { resourceData as nmsResource } from "../../pages/NMS/TestData";
import { convertArrayToTreeObject } from "../../utils";

const ResourceContext = createContext();
const ResourceUpdateContext = createContext();

const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState();

  // fetch data -> convert data type -> set
  useEffect(() => {
    setResources({
      sms: undefined,
      nms: convertArrayToTreeObject(nmsResource),
    });
  }, []);

  return (
    <ResourceContext.Provider value={resources}>
      <ResourceUpdateContext.Provider value={setResources}>
        {children}
      </ResourceUpdateContext.Provider>
    </ResourceContext.Provider>
  );
};

function useResource() {
  return useContext(ResourceContext);
}

function useSetResource() {
  return useContext(ResourceUpdateContext);
}

export { ResourceProvider, useResource, useSetResource };

ResourceProvider.propTypes = {
  children: PropTypes.node,
};
