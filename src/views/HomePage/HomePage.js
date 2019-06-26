import React from 'react'
import toastr from 'toastr'
import AppNavbar from './../../components/Navbar'
import InputField from './../../components/InputFields'
import Slider from './../../components/Slider'
import Modal from './../../components/Modal'
import { Row, Col } from 'reactstrap'
import classnames from 'classnames'
import './home.scss';

const initials = (last, first) => {
    return `${first.charAt(0).toUpperCase()} . ${last.charAt(0).toUpperCase()}`
}
const stripd = (string, length) => {
    if (length) {
        return string.substr(0, length)
    }
    return string
}
let view = ""
class Homepage extends React.Component {
    state = {
        open: false,
        action: null,
        index: null,
        title: null,
        fields: {
            firstname: {
                name: "firstname",
                title: "Firstname",
                error: "",
                value: '',
                type: 'text'
            },
            lastname: {
                name: "lastname",
                title: "Lastname",
                error: "",
                value: '',
                type: 'text'
            },
            username: {
                name: "username",
                title: "Username",
                error: "",
                value: '',
                type: 'text'
            },
            gender: {
                name: "gender",
                title: "Gender",
                error: "",
                choices: [
                    { label: 'Male', value: "M", checked: false },
                    { label: 'Female', value: "F", checked: false }
                ],
                type: 'radio',
                value: ''
            },
            headline: {
                name: "headline",
                title: "Headline",
                error: "",
                value: '',
                type: 'text'
            },
            story: {
                name: "story",
                title: "Share your story here...",
                row: 5,
                error: "",
                value: '',
                type: 'textarea'
            }
        }
    }

    componentDidMount() {
        this.props.callgetImages()
    }

    onAddStory = () => {
        const { content, registered } = this.props.userData
        const { fields } = this.state
        const id = content.length + 1
        const new_story = {}
        for (let field in fields) {
            new_story[field] = fields[field].value
        }
        new_story.likes = 0
        new_story.id = id
        if (registered.includes(new_story.username)) {
            toastr.warning(`@${new_story.username} has already shared a story!`, 'Warning!', { timeOut: 5000 })
            return
        }
        // else if (Object.keys(new_story).some(field => !fields[field].value)) {
        //     toastr.error(`All fields are Required`, 'Error!', { timeOut: 5000 })
        //     return
        // }
        this.props.addStory(new_story)
        this.toggle()
        toastr.success('Story Added Succesfully!', 'Success', { timeOut: 5000 })

    }
    onChange = (name, value) => {
        const { fields } = this.state
        this.setState({
            fields: {
                ...fields,
                [name]: {
                    ...this.state.fields[name],
                    value
                }
            }
        })
    }

    onsetAction = (action, title, index = null, story = null) => {
        this.setState({
            action,
            story,
            index,
            title
        })
        this.toggle()
    }

    onLike = (storyIndex) => {

        this.props.likeStory(storyIndex)
        this.setState({
            open: false
        })
    }

    toggle = () => {
        this.setState(preVState => ({
            open: !preVState.open
        }))
    }
    render() {
        const { shared } = this.props.userData
        const { fields, action, story, title, index } = this.state
        switch (action) {
            case 'share':
                view = (
                    <div>
                        {Object.keys(fields).map((field, key) => (
                            <InputField field={fields[field]} key={key} onChange={this.onChange} />
                        ))}
                        <p onClick={this.onAddStory} style={{ textAlign: 'right' }}><button className="btn btnaction" >Add</button></p>
                    </div>
                )
                break;
            case 'readmore':
                view = <div>
                    <div style={{ height: '400px', overflowY: 'scroll' }}>
                        {story}
                    </div >
                    <p className="right plk"><span className="like" onClick={() => this.onLike(index)} style={{ fontSize: '2rem' }} /> Like</p>
                </div>
                break;
            default:
                view = null
        }

        const { content } = this.props.userData
        const { open } = this.state
        return (
            < div className="Home" >
                <div style={{ position: 'fixed', width: '100%', top: '0', left: '0', zIndex: '200' }}>
                    <AppNavbar onClicked={this.onsetAction} />
                </div>

                <Slider onClicked={this.onsetAction} shared={shared} />
                <Modal open={open} toggle={this.toggle} title={title} >
                    {view}

                </Modal>
                <div style={{ padding: '20px 25px' }}>
                    <Row>
                        {content.map((user, i) => (
                            <Col sm="4" key={i} style={{ padding: '0px' }}>
                                <div className="story">
                                    <p className="avtit">
                                        <span className="av"></span>
                                        <span className="hdln">{initials(user.lastname, user.firstname)}</span>
                                        <span>{`@${user.username}`}</span>
                                    </p>
                                    <div className="sumry">
                                        <h4 style={{ textAlign: 'center' }}>{user.headline}</h4>
                                        <p className={classnames('minimize')}>
                                            {stripd(user.story, 100)}
                                            <span onClick={() => this.onsetAction('readmore', user.headline, i, user.story)}> ...read more</span>
                                        </p>

                                    </div>
                                    <p><span className="like" onClick={() => this.onLike(i)}> &nbsp;Liked by <strong style={{ color: 'blue' }}> {user.likes}</strong> people</span></p>



                                </div>

                            </Col>

                        ))}
                    </Row>
                </div>

            </div >
        )
    }
}

export default Homepage;