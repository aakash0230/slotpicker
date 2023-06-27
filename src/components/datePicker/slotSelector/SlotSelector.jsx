import "./slotSelector.css"

const SlotSelector = (props) => {
    const slots = [];

    // selects the slot
    const selectYourSlot = (slot, index) => {
        console.log("Selectoed slot", slot)
        props.setSelectedSlot(`Selected slot : ${slot}`)
        // const slotElements = document.getElementsByClassName("tile")
        // for(let i = 0; i < slotElements.length; i++){
        //     slotElements[i].style.backgroundColor = "#fff"
        // }
        // if(props.selectedSlot !== "No slot selected")
        //     document.getElementById(`slot${index + 1}`).style.backgroundColor = "green"
    }


    // changes the format of hours and minutes
    const formatHourandMinutes = (time) => {
        var timeArray = []
        const gettingTime = time.split(":")
        let Hours = parseInt(gettingTime[0])
        let Minutes = parseInt(gettingTime[1])
        if(Hours < 10){
            Hours = Hours%10
        }
        if(Minutes < 10){
            Minutes = Minutes%10
        }
        timeArray.push(Hours, Minutes)
        return timeArray;
    }

    const getStartTime = formatHourandMinutes(props.slots.startTime)
    const getEndTime = formatHourandMinutes(props.slots.endTime)

    const startTime = new Date();
    startTime.setHours(getStartTime[0],getStartTime[1],0)

    const endTime = new Date();
    endTime.setHours(getEndTime[0],getEndTime[1],0);

    const duration = props.slots.slotDuration; // in minutes

    const generateTimeSlots = (startTime, endTime, duration) => {

    while (startTime <= endTime) {
        let hours = startTime.getHours();
        if(hours < 10)
            hours = '0'+hours
        let minutes = startTime.getMinutes();
        if(minutes < 10)
            minutes = '0'+minutes
        const formattedTime = `${hours}:${minutes}`

        slots.push(formattedTime);
        startTime.setMinutes(startTime.getMinutes() + duration);
  }

};
generateTimeSlots(startTime,endTime,duration)

    return(
        props.dateChosenStatus &&
        <div>
            <h1>{props.dateSelected}</h1>
            <div className="time-slots">
                {
                    slots.map((slot, index) => (
                        <div className="time-slot" key={index} onClick={() => selectYourSlot(slot, index)}>
                            <div className="tile" id = {`slot${index + 1}`}>
                                <span className="time" >{slot}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SlotSelector