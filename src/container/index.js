import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest, confirmFetchRequest } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
        confirmFetchRequest: () => dispatch(confirmFetchRequest()) 
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
