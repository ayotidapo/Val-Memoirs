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
                    { label: 'Male', value: 1, checked: false },
                    { label: 'Female', value: 2, checked: false }
                ],
                type: 'radio'
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

    onAddStory = () => {
        const { content } = this.props.userData
        const { fields } = this.state
        const id = content.length + 1
        const new_story = {}
        for (let field in fields) {
            new_story[field] = fields[field].value
        }
        new_story.likes = 0
        new_story.id = id
        this.props.addStory(new_story)
        this.toggle()
        toastr.success('Story Added Succesfully!')

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
    onsetAction = (action, title, story = null) => {
        this.setState({
            action,
            story,
            title
        })
        //const { fields } = this.state
        // switch (action) {
        //     case 'share':
        //         view = (
        //             <div>
        //                 {Object.keys(fields).map((field, key) => (
        //                     <InputField field={fields[field]} key={key} onChange={this.onChange} />
        //                 ))}
        //                 <p onClick={this.onAddStory} style={{ textAlign: 'right' }}><button className="btn btnaction" >Add</button></p>
        //             </div>
        //         )
        //         break;
        //     case 'readmore':
        //         view = <div>{story}</div>
        //         break;
        //     default:
        //         view = null
        // }
        this.toggle()
    }


    toggle = () => {
        this.setState(preVState => ({
            open: !preVState.open
        }))
    }
    render() {
        toastr.success('Story Added Succesfully!')
        const { fields, action, story, title } = this.state
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
                view = <div>{story}</div>
                break;
            default:
                view = null
        }

        const { content } = this.props.userData
        const { open } = this.state
        return (
            < div className="Home" >
                <AppNavbar />

                <Slider onClicked={this.onsetAction} />
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
                                            <span onClick={() => this.onsetAction('readmore', user.headline, user.story)}> ...read more</span>
                                        </p>

                                    </div>
                                    <p><span className="like"> {`Liked by ${user.likes} people`}</span></p>



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