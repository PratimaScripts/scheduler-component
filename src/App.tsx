import React from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{
      EndTime: new Date(2019, 11, 25, 6, 30),
      StartTime: new Date(2019, 11, 25, 4, 0) //YYYY, MM, DD, TIME: HOUR/MINUTES
    }]
  }

  private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })

  public render(){
    return (
      <ScheduleComponent currentView='Month' selectedDate={new Date(2017, 5, 5)} eventSettings={{dataSource: this.remoteData}}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    );
  }

}

export default App;
