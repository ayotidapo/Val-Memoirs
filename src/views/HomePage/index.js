/* @flow */

import { connect } from 'react-redux'
import HomePage from './HomePage'
import { addStory, likeStory, } from './redux/homepage'
import { callgetImages } from './../../app_redux'



const mapStateToProps = (state, ownProps) => ({
    userData: state.userStory,
    slideImages: state.slideImages
})

const mapDispatchToProps = dispatch => ({
    addStory: (userStory) => dispatch(addStory(userStory)),
    likeStory: (storyIndex) => dispatch(likeStory(storyIndex)),
    callgetImages: () => dispatch(callgetImages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
