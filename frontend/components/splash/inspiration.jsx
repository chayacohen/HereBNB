import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Inspiration extends React.Component {

    constructor(props) {
        super(props)
        this.onPlaceClick = this.onPlaceClick.bind(this); 
    }

    onPlaceClick(e) {
        this.props.history.push(`map/${e.currentTarget.children[1].innerText.toLowerCase()}/0`) 
    }

    render() {
        return (
            <div className="inspo-container">
                <div className='inspo'>
                    <h2>Inspiration for your next trip</h2>
                    <div className='inspo-cities'>
                        <div className="inspo-city city-one" onClick={this.onPlaceClick}>
                            <img src={window.nyc}/>
                            <p>New York City</p>
                        </div>
                        <div className="inspo-city city-two" onClick={this.onPlaceClick}>
                            <img src={window.orlando}/>
                            <p>Orlando</p>
                        </div>
                        <div className="inspo-city city-three" onClick={this.onPlaceClick}>
                            <img src={window.miami}/>
                            <p>Miami</p>
                        </div>
                        <div className="inspo-city city-four" onClick={this.onPlaceClick}>
                            <img src={window.la}/>
                            <p>Los Angeles</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null)(Inspiration));


