import React from "react";
import Main from "../../containers/Main";
import Top from "../../containers/Main/Top";
import Title from "../../components/Title";
import Grid from "../../components/Grid";
import AlarmGrid from "../../components/AlarmGrid";
import RankGrid from "../../components/RankGrid";
import styles from "../pages.module.scss";
import { gridData } from "./TestData";

const NMSPage = () => {
  return (
    <Main>
      <Main.Top>
        <Top.Side>
          <div className={styles.side__container}>
            <Title name="알람현황" />
            <Grid />
          </div>
          <div className={styles.side__container}>
            <Title name="구성현황" />
            <Grid />
          </div>
          <div className={styles.side__container}>
            {/* RX, TX 전환 필요 */}
            <Title name="트래픽 사용률(RX) TOP5" />
            <RankGrid
              data={gridData.Rank_traffic_data}
              columns={gridData.trafficColumns}
            />
          </div>
        </Top.Side>
        <Top.Center>
          <div className={styles.sms__center__container}>
            <Title name="Topology MAP" />
          </div>
        </Top.Center>
        <Top.Side>
          <div className={styles.side__container}>
            <Title name="트래픽 현황(Kbps)" />
          </div>
        </Top.Side>
      </Main.Top>
      <Main.Bottom>
        <div className={styles.bottom__container}>
          <Title name="알람콘솔" />
          <AlarmGrid
            data={gridData.AlarmData}
            columns={gridData.alarmColumns}
          />
        </div>
      </Main.Bottom>
    </Main>
  );
};

export default NMSPage;
