import { connect } from 'react-redux'
import Users from './Users'
import { fetchUsers } from '../../redux/Users'
import getUsersByCity from '../../selectors/getUsersByCity'


const mapStateToProps = (state) => ({
  names: getUsersByCity(state),
})
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
