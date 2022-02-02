import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';



class SearchOptions extends React.Component {

    render() {
        return (
            <div className="search-option-background">
                <div className="search-option-container">
                    <div className="search-option-header">
                        <h1>GO ANYWHERE, ANYTIME</h1>
                        <div className="so-flexible">
                            <button><p className="so-text">I'm flexible</p></button>
                            <FontAwesomeIcon icon={faAngleRight} className="so-arrow"/>
                        </div>
                    </div>
                    <div className='suggested-searches-container'>
                        <h1>SUGGESTED SEARCHES</h1>
                        <div className="search-options">
                            <div className="search-option">
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock}/></p>
                                <p>{`New York ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option">
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Orlando ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option">
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Miami ${'\u00b7'} Stays`}</p>
                            </div>
                            <div className="search-option">
                                <p className="suggested-icon"><FontAwesomeIcon icon={faClock} /></p>
                                <p>{`Los Angeles ${'\u00b7'} Stays`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default SearchOptions; 