/* @flow */
// import moment from 'moment'

const SUBMIT_STORY = 'app/submit_story'

const initialState = {
    content: [
        {
            firstname: 'John',
            lastname: 'Dark',
            username: "john_D",
            gender: "M",
            headline: "Trip to Dubai",
            image: '',
            story: " Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            firstname: 'Julie',
            lastname: 'Lizzy',
            username: "lizzyJ",
            gender: "F",
            headline: "My first Date in Nigeria",
            image: '',
            story: " Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            firstname: 'Pat',
            lastname: 'Tom',
            username: "t_pat",
            gender: "M",
            headline: "Canada Leisure Experience",
            image: '',
            story: " Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            firstname: 'Eva',
            lastname: 'Matt',
            username: "jMatteva",
            gender: "M",
            headline: "Honeymoon Trip with hubby",
            image: '',
            story: " Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        }
    ]
}

addNewStoryFunc = (state, action) => {
    const content = state.content.slice(0)
    return content.unshift(action.new_story)
}
export function userStory(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_STORY:
            return {
                content: addNewStoryFunc(state, action)
            }

        default:
            return state
    }
}

export function addStory(new_story) {
    return {
        type: SUBMIT_STORY,
        new_story
    }
}