import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


class GuestOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { scroll: 0}; 
        this.handleMinusClick = this.handleMinusClick.bind(this); 
        this.handlePlusClick = this.handlePlusClick.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.props.removeGuest();
        })
    }

    handleMinusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.props.adults === 1 && (this.props.infants > 0 || this.props.children > 0)){
                    return;
                }
                else if (this.props.adults !== 0) {
                    this.props.removeAdult(); 
                } 
            }
            else if (field === "child") {
                if (this.props.children !== 0 ) {
                    this.props.removeChild(); 
                }
            }
            else if (field === "infant") {
                if (this.props.infants !== 0) {
                    this.props.removeInfant(); 
                }
            }
        }
    }

    handlePlusClick(field) {
        return () => {
            if (field === "adult") {
                this.props.addAdult(); 
            }
            else if (field === "child") {
                if (this.props.children === 0) {
                    this.props.addChild(); 
                    this.props.addAdult(); 
                }
                else {
                    this.props.addChild(); 
                }
            }
            else if (field === "infant") {
                if (this.props.infants === 0 && this.props.adults === 0) {
                    this.props.addAdult(); 
                    this.props.addInfant(); 
                }
                else if (this.props.infants < 5){
                    this.props.addInfant(); 
                }
            }
        }
    }



    render() {
        return (
            <div className="guest-option-container" onClick={(e) => { e.stopPropagation() }}>
                <div className="guest-options">
                    <div className='adult-option'>
                        <div className="guest-left-option">
                            <p className="guest-option-header">Adults</p>
                            <p className='guest-option-description'>Ages 13 or above</p>
                        </div>
                        <div className='option'>
                            <p className="count" onClick={this.handleMinusClick("adult")}>-</p>
                            <p className="number">{this.props.adults}</p>
                            <p className="count" onClick={this.handlePlusClick("adult")}>+</p>
                        </div>
                    </div>
                    <div className='child-option'>
                        <div className="guest-left-option">
                            <p className="guest-option-header">Children</p>
                            <p className='guest-option-description'>Ages 2-12</p>
                        </div>
                        <div className='option'>
                            <p className="count" onClick={this.handleMinusClick("child")}>-</p>
                            <p className="number">{this.props.children}</p>
                            <p className="count" onClick={this.handlePlusClick("child")}>+</p>
                        </div>
                    </div>
                    <div className='infant-option'>
                        <div className="guest-left-option">
                            <p className="guest-option-header">Infants</p>
                            <p className='guest-option-description'>Under 2</p>
                        </div>
                        <div className='option'>
                            <p className="count" onClick={this.handleMinusClick("infant")}>-</p>
                            <p className="number">{this.props.infants}</p>
                            <p className="count" onClick={this.handlePlusClick("infant")}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default withRouter(GuestOptions); 