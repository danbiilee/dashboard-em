export const gridData = {
  trafficColumns: [
    { field: "NO", title: "NO", width: "30", className: "no" },
    {
      field: "NETWORKNAME",
      title: "장비명",
      width: "240",
      className: "networkname",
    },
    { field: "UTILIZATION", title: "사용률(%)", className: "utilization" },
  ],
  alarmColumns: [
    {
      field: "ALARMSEVERITY",
      title: "등급",
      width: "40",
      className: "alarmseverity",
    },
    { field: "TIME", title: "발생일시", width: "160", className: "time" },
    {
      field: "ALARMSERVERNAME",
      title: "장비명",
      width: "220",
      className: "alarmservername",
    },
    {
      field: "IP",
      title: "IP",
      width: "120",
      className: "ip",
    },
    {
      field: "RESOURCENAME",
      title: "리소스명",
      width: "270",
      className: "resourcename",
    },
    {
      field: "ALARMNAME",
      title: "알람명",
      width: "320",
      className: "alarmname",
    },
    {
      field: "DETAIL",
      title: "상세내용",
      className: "detail",
    },
  ],
  trafficData: {
    RX: [
      {
        NO: "1",
        NETWORKNAME: "[6506-4-282-46] Te2/1/3",
        UTILIZATION: 83.3,
      },
      {
        NO: "2",
        NETWORKNAME: "[6506-4-282-46] Te1/6/5",
        UTILIZATION: 82,
      },
      {
        NO: "3",
        NETWORKNAME: "[6506-4-282-46] Te1/1/3",
        UTILIZATION: 65.2,
      },
      {
        NO: "4",
        NETWORKNAME: "[6506-4-282-46] Te2/1/1",
        UTILIZATION: 20.3,
      },
      {
        NO: "5",
        NETWORKNAME: "[6506-4-282-46] Te1/6/4",
        UTILIZATION: 10.4,
      },
    ],
    TX: [
      {
        NO: "1",
        NETWORKNAME: "[6506-2-282-46] Te2/1/3",
        UTILIZATION: 73.3,
      },
      {
        NO: "2",
        NETWORKNAME: "[6506-2-282-46] Te1/6/5",
        UTILIZATION: 72,
      },
      {
        NO: "3",
        NETWORKNAME: "[6506-2-282-46] Te1/1/3",
        UTILIZATION: 55.2,
      },
      {
        NO: "4",
        NETWORKNAME: "[6506-2-282-46] Te2/1/1",
        UTILIZATION: 10.3,
      },
      {
        NO: "5",
        NETWORKNAME: "[6506-2-282-46] Te1/6/4",
        UTILIZATION: 5.4,
      },
    ],
  },
  alarmData: [
    {
      ALARMSEVERITY: "심각",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "Polestar-AP2",
      IP: "192.168.232.12",
      RESOURCENAME: "CPU",
      ALARMNAME: "프로세스 메모리 사용률 비교(베이스라인)",
      DETAIL: "WIN NetworkConfig_Applinfo(EventLog감시)log메세지 Critical 발생",
    },
    {
      ALARMSEVERITY: "심각",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "Vlan2",
      ALARMNAME: "포트",
      DETAIL: "가용성 [DOWN(=DOWN,2회 연속)]",
    },
    {
      ALARMSEVERITY: "경고",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "ManagementEthernet 1/1",
      ALARMNAME: "포트",
      DETAIL: "가용성 [DOWN(=DOWN,2회 연속)]",
    },
    {
      ALARMSEVERITY: "경고",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
    {
      ALARMSEVERITY: "심각",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
    {
      ALARMSEVERITY: "경고",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
    {
      ALARMSEVERITY: "심각",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
    {
      ALARMSEVERITY: "경고",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
    {
      ALARMSEVERITY: "심각",
      TIME: "2021/06/24 09: 00: 05",
      ALARMSERVERNAME: "S4048-BB2",
      IP: "192.168.232.12",
      RESOURCENAME: "TenGigabitEthernet 1/45",
      ALARMNAME: "응답시간",
      DETAIL: "업무서비스 응답시간 지연[2.0ms(>0.1ms, 2회 연속)]",
    },
  ],
};

export const chartData = {
  trafficData: [
    {
      RESOURCE_ID: "test001",
      RESOURCE_NAME: "L4 Switch #1",
      LIST: [
        {
          ID: 1,
          DATE: "2021-08-11 09:00:00 GMT",
          RX: 400,
          TX: 200,
        },
        {
          ID: 2,
          DATE: "2021-08-11 10:00:00 GMT",
          RX: 500,
          TX: 300,
        },
        {
          ID: 3,
          DATE: "2021-08-11 11:00:00 GMT",
          RX: 300,
          TX: 100,
        },
        {
          ID: 4,
          DATE: "2021-08-11 12:00:00 GMT",
          RX: 510,
          TX: 310,
        },
        {
          ID: 5,
          DATE: "2021-08-11 13:00:00 GMT",
          RX: 630,
          TX: 330,
        },
        {
          ID: 6,
          DATE: "2021-08-11 14:00:00 GMT",
          RX: 590,
          TX: 290,
        },
        {
          ID: 7,
          DATE: "2021-08-11 15:00:00 GMT",
          RX: 650,
          TX: 350,
        },
        {
          ID: 8,
          DATE: "2021-08-11 16:00:00 GMT",
          RX: 620,
          TX: 320,
        },
        {
          ID: 9,
          DATE: "2021-08-11 17:00:00 GMT",
          RX: 550,
          TX: 250,
        },
      ],
    },
    {
      RESOURCE_ID: "test002",
      RESOURCE_NAME: "L4 Switch #2",
      LIST: [
        {
          ID: 1,
          DATE: "2021-08-11 09:00:00 GMT",
          RX: 400,
          TX: 200,
        },
        {
          ID: 2,
          DATE: "2021-08-11 10:00:00 GMT",
          RX: 500,
          TX: 300,
        },
        {
          ID: 3,
          DATE: "2021-08-11 11:00:00 GMT",
          RX: 300,
          TX: 100,
        },
        {
          ID: 4,
          DATE: "2021-08-11 12:00:00 GMT",
          RX: 510,
          TX: 310,
        },
        {
          ID: 5,
          DATE: "2021-08-11 13:00:00 GMT",
          RX: 630,
          TX: 330,
        },
        {
          ID: 6,
          DATE: "2021-08-11 14:00:00 GMT",
          RX: 590,
          TX: 290,
        },
        {
          ID: 7,
          DATE: "2021-08-11 15:00:00 GMT",
          RX: 650,
          TX: 350,
        },
        {
          ID: 8,
          DATE: "2021-08-11 16:00:00 GMT",
          RX: 620,
          TX: 320,
        },
        {
          ID: 9,
          DATE: "2021-08-11 17:00:00 GMT",
          RX: 550,
          TX: 250,
        },
      ],
    },
    {
      RESOURCE_ID: "test003",
      RESOURCE_NAME: "L4 Switch #3",
      LIST: [
        {
          ID: 1,
          DATE: "2021-08-11 09:00:00 GMT",
          RX: 400,
          TX: 200,
        },
        {
          ID: 2,
          DATE: "2021-08-11 10:00:00 GMT",
          RX: 500,
          TX: 300,
        },
        {
          ID: 3,
          DATE: "2021-08-11 11:00:00 GMT",
          RX: 300,
          TX: 100,
        },
        {
          ID: 4,
          DATE: "2021-08-11 12:00:00 GMT",
          RX: 510,
          TX: 310,
        },
        {
          ID: 5,
          DATE: "2021-08-11 13:00:00 GMT",
          RX: 630,
          TX: 330,
        },
        {
          ID: 6,
          DATE: "2021-08-11 14:00:00 GMT",
          RX: 590,
          TX: 290,
        },
        {
          ID: 7,
          DATE: "2021-08-11 15:00:00 GMT",
          RX: 650,
          TX: 350,
        },
        {
          ID: 8,
          DATE: "2021-08-11 16:00:00 GMT",
          RX: 620,
          TX: 320,
        },
        {
          ID: 9,
          DATE: "2021-08-11 17:00:00 GMT",
          RX: 550,
          TX: 250,
        },
      ],
    },
    {
      RESOURCE_ID: "test00001",
      RESOURCE_NAME: "L4 Switch #4",
      LIST: [
        {
          ID: 1,
          DATE: "2021-08-11 09:00:00 GMT",
          RX: 400,
          TX: 200,
        },
        {
          ID: 2,
          DATE: "2021-08-11 10:00:00 GMT",
          RX: 500,
          TX: 300,
        },
        {
          ID: 3,
          DATE: "2021-08-11 11:00:00 GMT",
          RX: 300,
          TX: 100,
        },
        {
          ID: 4,
          DATE: "2021-08-11 12:00:00 GMT",
          RX: 510,
          TX: 310,
        },
        {
          ID: 5,
          DATE: "2021-08-11 13:00:00 GMT",
          RX: 630,
          TX: 330,
        },
        {
          ID: 6,
          DATE: "2021-08-11 14:00:00 GMT",
          RX: 590,
          TX: 290,
        },
        {
          ID: 7,
          DATE: "2021-08-11 15:00:00 GMT",
          RX: 650,
          TX: 350,
        },
        {
          ID: 8,
          DATE: "2021-08-11 16:00:00 GMT",
          RX: 620,
          TX: 320,
        },
        {
          ID: 9,
          DATE: "2021-08-11 17:00:00 GMT",
          RX: 550,
          TX: 250,
        },
      ],
    },
  ],
};

export const resourceData = [
  {
    ID: "TEST",
    RESOURCE_NAME: "Network Group",
    LIST: [
      {
        ID: "S4048BB",
        RESOURCE_NAME: "S4048-BB",
        LIST: [
          {
            ID: "test001",
            RESOURCE_NAME: "test-001",
            LIST: [],
          },
          {
            ID: "test002",
            RESOURCE_NAME: "test-002",
            LIST: [],
          },
          {
            ID: "test003",
            RESOURCE_NAME: "test-003",
            LIST: [],
          },
        ],
      },
      {
        ID: "cisco261144",
        RESOURCE_NAME: "cisco-2611-44",
        LIST: [
          {
            ID: "test00001",
            RESOURCE_NAME: "test-00-001",
            LIST: [],
          },
          {
            ID: "test00002",
            RESOURCE_NAME: "test-00-002",
            LIST: [],
          },
          {
            ID: "test00003",
            RESOURCE_NAME: "test-00-003",
            LIST: [],
          },
          {
            ID: "test00004",
            RESOURCE_NAME: "test-00-004",
            LIST: [],
          },
          {
            ID: "test00005",
            RESOURCE_NAME: "test-00-005",
            LIST: [],
          },
        ],
      },
    ],
  },
];
