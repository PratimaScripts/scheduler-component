import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import './App.css';
class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{
      EndTime: new Date(2019, 11, 25, 6, 30),
      StartTime: new Date(2019, 11, 25, 4, 0) //YYYY, MM, DD, TIME: HOUR/MINUTES
    }]
  }
  public render(){
    return (
      <ScheduleComponent currentView='Month' eventSettings={this.localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    );
  }

}

export default App;
