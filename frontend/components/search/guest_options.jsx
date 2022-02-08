import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


class GuestOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { scroll: 0, adult: 0, child: 0, infant: 0}; 
        this.handleMinusClick = this.handleMinusClick.bind(this); 
        this.handlePlusClick = this.handlePlusClick.bind(this); 
        this.tabReturn = this.tabReturn.bind(this); 
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.props.removeGuest();
        })
    }

    tabReturn() {
        if (this.props.adult === 0 && this.props.child === 0 && this.props.infant === 0 ) return 'Add guests'
        const sing = this.props.infant === 1 ? `, ${this.props.infant} infant` : `, ${this.props.infant} infants`;
        const infantString = this.props.infant > 0 ? sing : '';
        const tab = this.props.adult === 1 && this.props.child === 0 ? `${this.props.adult} guest${infantString}` : `${this.props.adult + this.props.child} guests${infantString}`; 
        return tab 
    }

    componentDidUpdate(prevProps) {
        if (this.props.adult !== prevProps.adult || this.props.child !== prevProps.child || this.props.infant !== prevProps.infant) {
            const tab = this.tabReturn();
            this.props.changeTab(tab);
        }
    }   
    
    handleMinusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.props.adult === 1 && (this.props.infant > 0 || this.props.child > 0)){
                    return;
                }
                else if (this.props.adult !== 0) {
                    this.props.removeAdult()
                    this.setState({adult: this.state.adult -=1})
                } 
            }
            else if (field === "child") {
                if (this.props.child !== 0 ) {
                    this.props.removeChild()
                    this.setState({ child: this.state.child -= 1 })
                }
            }
            else if (field === "infant") {
                if (this.props.infant !== 0) {
                    this.props.removeInfant()
                    this.setState({ infant: this.state.infant -= 1 })
                }
            }
        }
    }


    handlePlusClick(field) {
        return () => {
            if (field === "adult") {
                this.props.receiveAdult();
                this.setState({ adult: this.state.adult += 1 })
            }
            else if (field === "child") {
                if (this.props.child === 0 && this.props.adult === 0) {
                    this.props.receiveChild()
                    this.props.receiveAdult()
                    this.setState({ adult: this.state.adult += 1, child: this.state.child += 1 })
                }
                else {
                    this.props.receiveChild()
                    this.setState({ child: this.state.child += 1 })
                }
            }
            else if (field === "infant") {
                if (this.props.adult === 0 && this.props.infant < 5) {
                    this.props.receiveAdult()
                    this.props.receiveInfant()
                    this.setState({ adult: this.state.adult += 1, infant: this.state.infant += 1 })
                }
                else if (this.props.infant < 5){
                    this.props.receiveInfant()
                    this.setState({ infant: this.state.infant += 1 })
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
                            <p className="number">{this.props.adult}</p>
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
                            <p className="number">{this.props.child}</p>
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
                            <p className="number">{this.props.infant}</p>
                            <p className="count" onClick={this.handlePlusClick("infant")}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default GuestOptions; 