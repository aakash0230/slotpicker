import "./timeSelector.css";

const TimeSelector = (props) => {


    // It shows the slots as per the duration, starttime and endtime
    const onSubmitClick = () => {
        console.log("Submit is clicked")
        const startTime = document.getElementById("start-time-input").value
        const endTime = document.getElementById("end-time-input").value
        const duration = parseInt(document.getElementById("duration-input").value)
        console.log(typeof startTime, typeof endTime, typeof duration)
        props.setSlots({
            startTime : startTime,
            endTime : endTime,
            slotDuration : duration,
            selected : true
        })
        props.setSelectedSlot("No slot selected")
    }



  return (
    <div className="form-container">
      <div className="input-container">
        <label className="form-label" htmlFor="start-time-input">
          Start Time:
        </label>
        <input className="form-input" type="time" id="start-time-input" name="startTime" defaultValue={props.slots.startTime} required/>
      </div>

      <div className="input-container">
        <label className="form-label" htmlFor="end-time-input">
          End Time:
        </label>
        <input className="form-input" type="time" id="end-time-input" name="endTime" defaultValue = {props.slots.endTime} required/>
      </div>

      <div className="input-container">
        <label className="form-label" htmlFor="duration-input">
          Duration (in minutes):
        </label>
        <input className="form-input" type="number" id="duration-input" name="duration" defaultValue = {props.slots.slotDuration} required/>
      </div>

        <input className="form-submit submit-btn" onClick={() => onSubmitClick()} type="submit" value="Show Slots" />
    </div>
  );
};

export default TimeSelector;
