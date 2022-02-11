import React, {useState} from 'react'; 
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class CalendarComponent extends React.Component {

    constructor(props) {
        super(props); 
        this.handleChange = this.handleChange.bind(this); 
        this.state = {start_date: '', end_date: ''}; 
        this.selectionRange = this.selectionRange.bind(this); 
    }


    handleChange(e) {
        const {startDate, endDate} = e.selection; 
        this.setState({start_date: startDate, end_date: endDate})
    }

    selectionRange() {
        if (!this.state.start_date) {
            return ({
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            })
        }
        else if (this.state.start_date && !this.state.end_date) {
            return (
                {
                    startDate: this.state.start_date,
                    endDate: new Date(),
                    key: "selection",
                }
            )
        }
        else if (this.state.start_date && this.state.end_date) {
            return (
                {
                    startDate: this.state.start_date,
                    endDate: this.state.end_date,
                    key: "selection",
                }
            )
        }
    }

    render() {

        const selectionRange = this.selectionRange(); 
        return (
            <DateRange
                ranges={[selectionRange]}
                onChange={this.handleChange}
                className="calendar"
            />
        )
    }
}
export default CalendarComponent; 