/* @flow */
// import moment from 'moment'

const SUBMIT_STORY = 'app/submit_story'

const LIKE_STORY = 'app/like_story'

const initialState = {
    shared: false,
    registered: ['john_D', 'lizzyJ', 't_pat', 'jMatteva'],
    content: [
        {
            id: 0,
            firstname: 'John',
            lastname: 'Dark',
            username: "john_D",
            gender: "M",
            headline: "Trip to Dubai",
            image: '',
            likes: 0,
            minimize: true,
            story: "1.First Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            id: 1,
            firstname: 'Julie',
            lastname: 'Lizzy',
            username: "lizzyJ",
            gender: "F",
            headline: "My first Date in Nigeria",
            image: '',
            likes: 0,
            minimize: true,
            story: "2. Second Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            id: 2,
            firstname: 'Pat',
            lastname: 'Tom',
            username: "t_pat",
            gender: "M",
            headline: "Canada Leisure Experience",
            image: '',
            likes: 0,
            minimize: true,
            story: "3. Third Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        },
        {
            id: 3,
            firstname: 'Eva',
            lastname: 'Matt',
            username: "jMatteva",
            gender: "M",
            headline: "Honeymoon Trip with hubby",
            image: '',
            likes: 0,
            minimize: true,
            story: "4.Fourth Lorem ipsum dolor sit amet, pellentesque dictumst ut ornare, cras mauris ligula luctus nec est rhoncus. Nec elementum luctus lectus pellentesque eget, pellentesque pede amet dui maiores euismod conubia, penatibus condimentum erat. Sodales nulla at in euismod at non, urna nec, odio nunc mauris luctus eros morbi, nibh purus, leo mi rhoncus volutpat turpis magna. Quisque montes eu ipsum ante, pulvinar sodales mollis. Orci non, dolor dictumst risus, feugiat ut vitae. Duis ipsum. Mi eget penatibus pellentesque, commodo lorem, quis rutrum laoreet lacus eros posuere, amet porta. Tellus dui nulla aliquam donec lobortis vel, leo per donec sapien id, congue praesent fringilla, mauris sollicitudin id habitasse similique, suscipit tempus wisi nec magna at conubia. Velit justo magna rhoncus velit class augue. Platea tempore pellentesque adipiscing etiam sit vestibulum, mi imperdiet et dui lorem nulla dapibus, ligula urna mollis blandit erat, elit sodales eget amet. Fusce et eget platea arcu, lectus u"
        }
    ]
}

const addNewStoryFunc = (state, action) => {
    const content = state.content.slice(0)
    const registered = state.registered.slice(0)
    registered.push(action.new_story.username)
    content.unshift(action.new_story)
    return {
        registered,
        content
    }
}

const likeStoryFunc = (state, action) => {
    const content = state.content.slice(0)
    const story = content[action.storyIndex]
    let newStory = { ...story }
    newStory.likes = story.likes + 1
    content[action.storyIndex] = newStory
    return content
}
export function userStory(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_STORY:
            return { ...state, ...addNewStoryFunc(state, action) }

        case LIKE_STORY:
            return {
                ...state,
                content: likeStoryFunc(state, action)
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


export function likeStory(storyIndex) {
    return {
        type: LIKE_STORY,
        storyIndex
    }
}