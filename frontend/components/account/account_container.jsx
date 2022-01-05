import {connect} from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import Account from './account';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

export default withRouter(connect(mapStateToProps)(Account));