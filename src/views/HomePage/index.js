/* @flow */

import { connect } from 'react-redux'
import HomePage from './HomePage'
import { addStory, likeStory } from './redux/homepage'



const mapStateToProps = (state, ownProps) => ({
    userData: state.userStory,

})

const mapDispatchToProps = dispatch => ({
    addStory: (userStory) => dispatch(addStory(userStory)),
    likeStory: (storyIndex) => dispatch(likeStory(storyIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
