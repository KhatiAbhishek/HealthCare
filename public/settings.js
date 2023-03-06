const settings = {
  
  DASHBOARD_NAME: 'Paitent Health Dashboard',
  BROKER_URL: 'wss://mqtt.eclipse.org:443/mqtt',
  
  OXIMETERS_TOPIC: 'oximeters',
  
  ALERTS_TOPIC: 'alerts',
  
  RECORDS_TO_SAVE: 500,
  
  MINUTES_TO_EXPIRE: 1,

  HOSPITAL_BEDS: [
    { name: 'Paitent 1', sensor_id: 1 },
    { name: 'Paitent 2', sensor_id: 2 },
    { name: 'Paitent 3', sensor_id: 3 },
    { name: 'Paitent 4', sensor_id: 4 },
    { name: 'Paitent 5', sensor_id: 5 },
    { name: 'Paitent 6', sensor_id: 6 },
    { name: 'Paitent 7', sensor_id: 7 },
    { name: 'Paitent 8', sensor_id: 8 },
    { name: 'Paitent 9', sensor_id: 9 },
    { name: 'Paitent 10', sensor_id: 10 },
  ],

  REPORT_INTERVAL_MINUTES: 60,

  oximeters:1 [
  {
    "beat": 80,
    "spo2": 100,
    "temp": 37
}
  ]

};
