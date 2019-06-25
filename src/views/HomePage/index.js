/* @flow */

import { connect } from 'react-redux'
import HomePage from './HomePage'
import { addStory } from './redux/homepage'



const mapStateToProps = (state, ownProps) => ({
    userData: state.userStory,

})

const mapDispatchToProps = dispatch => ({
    addStory: (userStory) => dispatch(addStory(userStory)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
