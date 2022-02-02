import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


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
        e.preventDefault(); 
        this.props.history.push('/listings')
    }

    handleBackgroundClick(e) {
        // e.stopPropagation(); 
        this.props.removeGoing(); 
    }

    handleOptionClick(place) {
        return () => {
            if (place === 'newYork') {
                this.props.history.push('/map/new%20york%20city')
            }
            else if (place === "orlando") {
                this.props.history.push('/map/orlando')
            }
            else if (place === "miami") {
                this.props.history.push('/map/miami')
            }
            else if (place === "losAngeles") {
                this.props.history.push('/map/los%20angeles')
            }
            this.props.removeGoing(); 
        }
    }
    render() {
        return (
            // <div className="search-option-background" onClick={this.handleBackgroundClick}>
                <div className="search-option-container" onClick={(e) => {e.stopPropagation()}}>
                    <div className="search-option-header">
                        <h1>GO ANYWHERE, ANYTIME</h1>
                        <div className="so-flexible" onClick={this.handleClick}>
                            <button><p className="so-text">I'm flexible</p></button>
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


export default withRouter(SearchOptions); 