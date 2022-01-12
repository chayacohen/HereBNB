import {connect} from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import { requestUser } from '../../actions/user_actions';
import Account from '../account/account';

const mapStateToProps = (state, ownProps) => ({  
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id]
        
})

const mapDispatchToProps = (dispatch) => ({
    requestUser: (userId) => dispatch(requestUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));