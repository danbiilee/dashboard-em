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

const SMSPage = () => {
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
              {/* <div className={styles.sms__center__item}>[0,0]</div>
              <div className={styles.sms__center__item}>[0,1]</div> */}
            </div>
            <div className={styles.sms__center__items}>
              {/* <div className={styles.sms__center__item}>[1,0]</div>
              <div className={styles.sms__center__item}>[1,1]</div> */}
            </div>
          </div>
        </Top.Center>
        <Top.Side>
          <div className={styles.side__container}>
            <Title name="서버 CPU 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
          </div>
          <div className={styles.side__container}>
            <Title name="서버 MEM 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
          </div>
          <div className={styles.side__container}>
            <Title name="서버 DISK I/O 사용률 TOP5" />
            <RankGrid
              data={gridData.Rank_server_data}
              columns={gridData.serverColumns}
            />
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

export default SMSPage;
