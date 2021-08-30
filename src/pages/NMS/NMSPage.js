import React, { useState } from "react";
import PropTypes from "prop-types";
import Main from "../../containers/Main";
import Top from "../../containers/Main/Top";
import Title from "../../components/Title";
import AlarmGrid from "../../components/AlarmGrid";
import RankGrid from "../../components/RankGrid";
import styles from "../pages.module.scss";
import { gridData } from "./TestData";
import TrafficChart from "../../components/TrafficChart";
import RTXButtons from "../../components/RTXButtons";
import { SelectResourceButton } from "../../components/SelectResource";
import AlarmStatus from "../../components/AlarmStatus";
import ConfigurationStatus from "../../components/ConfigurationStatus";

const NMSPage = ({ onToggleSelectModal }) => {
  const [selectedData, setSelectedData] = useState("RX");
  const selectedResourceId = 1;
  const chartGroups = gridData.trafficChartGroupData.find(
    (item) => item.RESOURCE_ID === selectedResourceId
  ).RESOURCE_GROUP_LIST;

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
          <div className={styles.side__container}>
            <div className={styles.title__container}>
              <Title name={`트래픽 사용률(${selectedData}) TOP5`} />
              <div className={`${styles.title__container__button} top5`}>
                <RTXButtons
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              </div>
            </div>
            <RankGrid
              data={gridData.rankTrafficData[selectedData]}
              columns={gridData.trafficColumns}
            />
          </div>
        </Top.Side>
        <Top.Center>
          <div className={styles.sms__center__container}>
            <Title name="Topology MAP" />
            <div className={styles.nms__border__container}></div>
          </div>
        </Top.Center>
        <Top.Side>
          <div className={styles.side__container}>
            <div className={styles.title__container}>
              <Title name="트래픽 현황(Kbps)" />
              <div
                className={`${styles.title__container__button} ${styles.resource} status`}
              >
                <SelectResourceButton
                  onToggleSelectModal={onToggleSelectModal}
                />
              </div>
            </div>
            <div className={styles.nms__border__container}>
              {chartGroups.map((group) => (
                <TrafficChart key={group.GROUP_ID} data={group} />
              ))}
            </div>
          </div>
        </Top.Side>
      </Main.Top>
      <Main.Bottom>
        <div className={styles.bottom__container}>
          <Title name="알람콘솔" />
          <AlarmGrid
            data={gridData.alarmData}
            columns={gridData.alarmColumns}
          />
        </div>
      </Main.Bottom>
    </Main>
  );
};

NMSPage.propTypes = {
  onToggleSelectModal: PropTypes.func,
};

export default NMSPage;
