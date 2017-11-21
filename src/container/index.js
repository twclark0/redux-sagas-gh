import { connect } from 'react-redux'
import App from '../components/App'
import { fetchStarWarsRequest, fetchStarWarsPlanetsRequest } from '../actions'

const mapStateToProps = ({starWars}) => ({starWars})

const bindActionsToDispatch = dispatch => (
    {
        fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
        fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetsRequest()) 
    }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer
