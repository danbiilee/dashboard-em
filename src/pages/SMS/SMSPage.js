import React from "react";
import Main from "../../containers/Main";
import Title from "../../components/Title";
import Grid from "../../components/Grid";
import Top from "../../containers/Main/Top";
import styles from "../pages.module.scss";

const SMSPage = () => {
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
            <Title name="파일시스템 사용률 TOP 5" />
            <Grid />
          </div>
        </Top.Side>
        <Top.Center>
          <div className={styles.sms__center__container}>
            <Title name="서버운영현황" />
            <div className={styles.sms__center__items}>
              <div className={styles.sms__center__item}>[0,0]</div>
              <div className={styles.sms__center__item}>[0,1]</div>
            </div>
            <div className={styles.sms__center__items}>
              <div className={styles.sms__center__item}>[1,0]</div>
              <div className={styles.sms__center__item}>[1,1]</div>
            </div>
          </div>
        </Top.Center>
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
            <Title name="파일시스템 사용률 TOP 5" />
            <Grid />
          </div>
        </Top.Side>
      </Main.Top>
      <Main.Bottom>
        <Title name="알람목록" />
        <Grid />
      </Main.Bottom>
    </Main>
  );
};

export default SMSPage;
