import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import './App.css';

const App: React.FC = () => {
  return (
    <ScheduleComponent currentView='Month'>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
  );
}

export default App;
