import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


class GuestOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { scroll: 0 , adults: 0, children: 0, infants: 0}; 
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
                if (this.state.adults !== 0) {
                    this.setState({adults: this.state.adults -= 1})
                }
                this.props.removeAdult(); 
            }
            else if (field === "child") {
                if (this.state.children !== 0) {
                    this.setState({children: this.state.children -= 1})
                }
                this.props.removeChild(); 
            }
            else if (field === "infant") {
                if (this.state.infants !== 0) {
                    this.setState({infants: this.state.infants -= 1})
                }
                this.props.removeInfant(); 
            }
        }
    }

    handlePlusClick(field) {
        return () => {
            if (field === "adult") {
                this.setState({adults: this.state.adults += 1})
                this.props.addAdult(); 
            }
            else if (field === "child") {
                this.setState({children: this.state.children += 1})
                this.props.addChild(); 
            }
            else if (field === "infant") {
                this.setState({infants: this.state.infants += 1})
                this.props.addInfant(); 
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
                            <p className="number">{this.state.adults}</p>
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
                            <p className="number">{this.state.children}</p>
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
                            <p className="number">{this.state.infants}</p>
                            <p className="count" onClick={this.handlePlusClick("infant")}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default withRouter(GuestOptions); 