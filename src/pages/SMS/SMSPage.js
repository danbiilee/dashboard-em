import React from "react";
import Main from "../../containers/Main";
import Title from "../../components/Title";
import Top from "../../containers/Main/Top";
import styles from "../pages.module.scss";
import RankGrid from "../../components/RankGrid";
import AlarmGrid from "../../components/AlarmGrid";
import { gridData } from "./TestData";
import AlarmStatus from "../../components/AlarmStatus";
import ConfigurationStatus from "../../components/ConfigurationStatus";
import Item from "../../containers/Main/Top/Center/Item";

const SMSPage = () => {
  const selectedResourceId = 1;
  const chartGroups = gridData.columnChartGroupData.find(
    (item) => item.RESOURCE_ID === selectedResourceId
  ).RESOURCE_GROUP_LIST;
  const DDDD = [0, 50, 80, 100];
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
            <Title name="파일시스템 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_file_data}
              columns={gridData.fileSystemColumns}
              type="파일시스템"
            />
          </div>
        </Top.Side>
        <Top.Center>
          <div className={styles.sms__center__container}>
            <Title name="서버운영현황" />
            <div className={styles.sms__center__items}>
              {DDDD.map((item, i) => (
                <Item key={i} data={chartGroups} gauge={item} />
              ))}
            </div>
          </div>
        </Top.Center>
        <Top.Side>
          <div className={styles.side__grid__container}>
            <Title name="서버 CPU 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
          </div>
          <div className={styles.side__grid__container}>
            <Title name="서버 MEM 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
          </div>
          <div className={styles.side__grid__container}>
            <Title name="서버 DISK I/O 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
          </div>
        </Top.Side>
      </Main.Top>
      <Main.Bottom>
        <Title name="알람콘솔" />
        <AlarmGrid data={gridData.AlarmData} columns={gridData.alarmColumns} />
      </Main.Bottom>
    </Main>
  );
};

export default SMSPage;
