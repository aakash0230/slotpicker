import "./datepicker.css"

const DatePicker = (props) => {

    // sets the currentDate
    const onDateChange = () => {
        const chosenDate = document.getElementById('chose-date').value
        const dateObj = new Date(chosenDate);
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const year = dateObj.getFullYear();            
        props.setDateSelected(`${day}th ${month} ${year}`);
    }
    
    // sets the status of date chosen
    const dateChosen = () => {
        props.setDateChosenStatus(true)
    }

    return(

        <div className="container">
            <h1>Show a Date Control</h1>
            <label htmlFor="chose-date">Choose your slot Day:</label>
            <input type="date" onChange={() => onDateChange()} id="chose-date" name="chose-date" required/>
            {
                props.dateSelected ? 
                <button onClick={() => dateChosen()} type="button">Confirm Date</button> 
                :
                <button disabled type="button">Select Date</button>
            }
        </div>
    )
}

export default DatePicker;