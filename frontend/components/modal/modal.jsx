import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import React from "react";
import EmailFormContainer from "../session_form/email_form_container";
import UpdatePicForm from '../account/update_pic_form';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
    }

    handleBackgroundClick() {
        this.props.resetSessionErrors()
        this.props.closeModal(); 
    }

    render() {
        if(!this.props.modal) {
            return null; 
        }
        let component; 
        switch(this.props.modal){
            case 'login':
                component = <LoginFormContainer/>;
                break; 
            case 'signup': 
                component = <SignupFormContainer/>; 
                break; 
            case 'email': 
                component = <EmailFormContainer/>; 
                break; 
            case 'uploadPicture': 
                component = <UpdatePicForm/>
                break; 
            default: 
                return null; 
        };
        return (
            <div className="modal-background" onClick={this.handleBackgroundClick}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );  
    }
}


export default Modal; 