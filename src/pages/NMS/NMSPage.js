import React, { useState } from "react";
import PropTypes from "prop-types";
import Main from "../../containers/Main";
import Top from "../../containers/Main/Top";
import Title from "../../components/Title";
import AlarmGrid from "../../components/AlarmGrid";
import RankGrid from "../../components/RankGrid";
import styles from "../pages.module.scss";
import { gridData, chartData } from "./TestData";
import TrafficChart from "../../components/TrafficChart";
import RTXButtons from "../../components/RTXButtons";
import AlarmStatus from "../../components/AlarmStatus";
import ConfigurationStatus from "../../components/ConfigurationStatus";
import { useSelectedResources } from "../../hooks";
import Button from "../../components/Button";
import Topology from "../../components/Topology/Topology";

const NMSPage = ({ onToggleModal, resources }) => {
  const [type, setType] = useState("RX"); // 좌: 트래픽 사용률 TOP5

  // 우: 트래픽 현황
  const { selectedResources } = useSelectedResources(resources.ROOT.children);
  const resourceIds = selectedResources.map((resource) => resource.id);
  const selectedTrafficCharts = chartData.trafficData.filter((item) =>
    resourceIds.includes(item.RESOURCE_ID)
  ); // 바꾸기 -> resourceIds를 파라미터로 차트 데이터 refetch!

  return (
    <Main>
      <Main.Top>
        <Top.Side>
          <div className={styles.side__container}>
            <Title name="알람현황" />
            <AlarmStatus />
          </div>
          <div className={styles.side__container}>
            <Title name="구성현황" />
            <ConfigurationStatus />
          </div>
          <div className={styles.side__grid__container}>
            <div className={styles.title__container}>
              <Title name={`트래픽 사용률(${type}) TOP5`} />
              <div className={`${styles.title__container__button} top5`}>
                <RTXButtons selectedData={type} setSelectedData={setType} />
              </div>
            </div>
            <RankGrid
              data={gridData.trafficData[type]}
              columns={gridData.trafficColumns}
            />
          </div>
        </Top.Side>
        <Top.Center>
          <div className={styles.nms__center__container}>
            <Title name="Topology MAP" />
            <div className={styles.nms__border__container}>
              <Topology />
            </div>
          </div>
        </Top.Center>
        <Top.Side>
          <div
            className={`${styles.side__container} ${styles.nms__chart__container}`}
          >
            <div className={styles.title__container}>
              <Title name="트래픽 현황(Kbps)" />
              <div
                className={`${styles.title__container__button} ${styles.resource}`}
              >
                <Button classToAdd="resource" onClick={onToggleModal}>
                  리소스 선택
                </Button>
              </div>
            </div>
            <div className={styles.nms__border__container}>
              {selectedTrafficCharts.map((group) => (
                <TrafficChart key={group.RESOURCE_ID} data={group} />
              ))}
            </div>
          </div>
        </Top.Side>
      </Main.Top>
      <Main.Bottom>
        <Title name="알람콘솔" />
        <AlarmGrid data={gridData.alarmData} columns={gridData.alarmColumns} />
      </Main.Bottom>
    </Main>
  );
};

NMSPage.propTypes = {
  onToggleModal: PropTypes.func,
  resources: PropTypes.object,
};

export default NMSPage;
