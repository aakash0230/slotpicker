import { useState } from 'react';
import './App.css';
import DatePicker from './components/datePicker/datePicker/DatePicker';
import SlotSelector from './components/datePicker/slotSelector/SlotSelector';
import TimeSelector from './components/datePicker/timeSelector/TimeSelector';




const defaultSlots = {
  startTime : "10:00",
  endTime : "11:30",
  slotDuration : 30,
  selected : false
}





function App() {
  const [dateChosenStatus, setDateChosenStatus] = useState(false) 
  const [slots, setSlots] = useState(defaultSlots)
  const [dateSelected, setDateSelected] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState("No slot selected")

  return (
    <div className="App">
      <TimeSelector slots = {slots} setSlots = {setSlots} setSelectedSlot = {setSelectedSlot}/>
      <div className='parent'>
        <div className='select-date'>
          <DatePicker dateChosenStatus = {dateChosenStatus} setDateChosenStatus = {setDateChosenStatus} dateSelected = {dateSelected} setDateSelected = {setDateSelected}/>
          <h1>{selectedSlot}</h1>
        </div>
        <div className='select-slot'>
          <SlotSelector dateChosenStatus = {dateChosenStatus} setDateChosenStatus = {setDateChosenStatus} dateSelected = {dateSelected} setDateSelected = {setDateSelected} slots = {slots} setSlots ={setSlots} selectedSlot = {selectedSlot} setSelectedSlot = {setSelectedSlot}/>   
        </div>
      </div>
    </div>
  );
}

export default App;
