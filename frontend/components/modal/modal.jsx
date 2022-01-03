import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import React from "react";
import EmailFormContainer from "../session_form/email_form_container";

function Modal({modal, closeModal}) {

    if(!modal) {
        return null; 
    }
    let component; 
    switch(modal){
        case 'login':
            component = <LoginFormContainer/>;
            break; 
        case 'signup': 
            component = <SignupFormContainer/>; 
            break; 
        case 'email': 
            component = <EmailFormContainer/>; 
            break; 
        default: 
            return null; 
    };
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );  
}


export default Modal; 