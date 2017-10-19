import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest } from '../actions'

const mapStateToProps = ({reducer}) => ({reducer})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarWarsRequest: () => { dispatch(fetchStarWarsRequest) }
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
