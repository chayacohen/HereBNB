import React, {useState} from 'react'; 
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


function showNeighboringMonth() {
    return false; 
}

const CalendarComponent = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="two-calendars">
            <Calendar onChange={onChange} value={value} className="calendar"/>
            <Calendar onChange={onChange} value={value} className="calendar"/>
        </div>
    )
}

export default CalendarComponent; 