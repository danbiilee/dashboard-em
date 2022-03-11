import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { resourceData as nmsResource } from "../../pages/NMS/TestData";
import { convertArrayToTreeObject } from "../../utils";
import {
  LOCAL_STORAGE_RESOURCE,
  RESOURCE_SELECTED_IDS,
} from "../../utils/constants";
import { useLocalStorage } from "../../hooks";

const ResourceContext = createContext();
const ResourceUpdateContext = createContext();

const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState();
  const { storedStorage, setStorage } = useLocalStorage(LOCAL_STORAGE_RESOURCE);

  // Fetch data -> Convert data type -> Set
  useEffect(() => {
    // Set localstorage
    let selectedIds = storedStorage;
    if (!storedStorage) {
      setStorage(RESOURCE_SELECTED_IDS);
      selectedIds = RESOURCE_SELECTED_IDS;
    }

    setResources({
      sms: [],
      nms: convertArrayToTreeObject(selectedIds.nms, nmsResource),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
