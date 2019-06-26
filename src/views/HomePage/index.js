/* @flow */

import { connect } from 'react-redux'
import HomePage from './HomePage'
import { addStory, readMore } from './redux/homepage'



const mapStateToProps = (state, ownProps) => ({
    userData: state.userStory,

})

const mapDispatchToProps = dispatch => ({
    addStory: (userStory) => dispatch(addStory(userStory)),
    readMore: (storyId) => dispatch(readMore(storyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
