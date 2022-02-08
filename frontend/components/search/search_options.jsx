import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'; 
import { resetGuests } from '../../actions/guest_actions';

class SearchOptions extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {scroll: 0}
        this.handleClick = this.handleClick.bind(this); 
        this.handleOptionClick = this.handleOptionClick.bind(this); 
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
        this.props.removeGoing();
        })
    }

    handleClick(e) {
        // e.preventDefault(); 
        // e.stopPropagation(); 
        const guests = this.props.adult + this.props.child
        if (this.props.searchLocation === ''){
            this.props.resetGuests()
            this.props.history.push(`/listings/guests/${guests}`)
        }
        else if (this.props.searchLocation && guests === 0) {
            this.props.history.push(`/map/${this.props.searchLocation}/0`)
        }
        else if (this.props.searchLocation && guests > 0) {
            this.props.history.push(`/map/${this.props.searchLocation}/${guests}`)
        }
        this.props.removeGoing();
    }

    handleBackgroundClick(e) {
        // e.stopPropagation(); 
        this.props.removeGoing(); 
    }

    handleOptionClick(place) {
        return () => {
            if (place === 'newYork') {
                this.props.history.push('/map/new%20york%20city/0')
            }
            else if (place === "orlando") {
                this.props.history.push('/map/orlando/0')
            }
            else if (place === "miami") {
                this.props.history.push('/map/miami/0')
            }
            else if (place === "losAngeles") {
                this.props.history.push('/map/los%20angeles/0')
            }
            this.props.removeGoing(); 
        }
    }
    render() {
        return (
            // <div className="search-option-background" onClick={this.handleBackgroundClick}>
                <div className="search-option-container">
                    <div className="search-option-header">
                        <h1>GO ANYWHERE, ANYTIME</h1>
                        <div className="so-flexible" onClick={this.handleClick}>
                            <div><p className="so-text">I'm flexible</p></div>
                            <FontAwesomeIcon icon={faAngleRight} className="so-arrow"/>
                        </div>
                    </div>
                    <div className='suggested-searches-container'>
                        <h1>SUGGESTED SEARCHES</h1>
                        <div className="search-options">
                            <div className="search-option" onClick={this.handleOptionClick("newYork")}>
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock}/></p>
                                <p>{`New York ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option" onClick={this.handleOptionClick("orlando")}>
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Orlando ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option" onClick={this.handleOptionClick("miami")}>
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Miami ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option" onClick={this.handleOptionClick("losAngeles")}>
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Los Angeles ${'\u00b7'} Stays`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            // </div> 
        )
    }

}


const mapStateToProps = (state) => ({
    adult: state.ui.guests.adult,
    child: state.ui.guests.child,
    infant: state.ui.guests.infant  
})

const mapDispatchToProps = (dispatch) => ({
    resetGuests: () => dispatch(resetGuests())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchOptions)); 