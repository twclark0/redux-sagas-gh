import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest, queueChannelRequests } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
        queueChannelRequest: () => dispatch(queueChannelRequests())  
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
