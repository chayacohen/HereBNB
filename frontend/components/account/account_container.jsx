import {connect} from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Account from './account';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));