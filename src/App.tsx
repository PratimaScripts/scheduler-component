import React from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

class App extends React.Component{
  private localData: EventSettingsModel ={
    dataSource: [{
      Id: 1,
      End: new Date(2019, 11, 25, 6, 30),
      Start: new Date(2019, 11, 25, 4, 0), //YYYY, MM, DD, TIME: HOUR/MINUTES
      Summary: '',
      IsAllDay: true,
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10',
      IsReadonly: true,
      IsBlock:true
    },
    {
      Id: 2,
      End: new Date(2019, 11, 28, 6, 30),
      Start: new Date(2019, 11, 28, 4, 0), //YYYY, MM, DD, TIME: HOUR/MINUTES
      Summary: '',
      IsReadonly: true
    }
  ],
    fields:{
      subject: {name:'Summary', default: 'No title is provided.'},
      startTime: {name: 'Start'},
      endTime: {name: 'End'}
    }
  }

  private remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })

  public render(){
    return (
      <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 11, 1)} eventSettings={this.localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    );
  }

}

export default App;
