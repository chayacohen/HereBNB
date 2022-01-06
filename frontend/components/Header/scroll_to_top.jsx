import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {


    componentDidMount() {
        window.scrollTo(0, 0); 
    }
    componentDidUpdate(ownProps) {
        if (this.props.location !== ownProps.location) {
            window.scrollTo(0, 0); 
        }
    }

    render() {
        return this.props.children 
    }
}

export default withRouter(ScrollToTop); 