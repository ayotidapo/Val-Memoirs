import React from 'react'
import AppNavbar from './../../components/Navbar'
import InputField from './../../components/InputFields'
import Slider from './../../components/Slider'
import Modal from './../../components/Modal'
import { Row, Col } from 'reactstrap'
import './home.scss';

const initials = (last, first) => {
    return `${first.charAt(0).toUpperCase()} . ${last.charAt(0).toUpperCase()}`
}
const stripd = (string, length) => {
    return string.substr(0, length)
}

class Homepage extends React.Component {
    state = {
        open: false,
        more: null,
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

    onReadMore = (more) => {
        this.setState({
            more
        })
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

    toggle = () => {
        this.setState(preVState => ({
            open: !preVState.open
        }))
    }
    render() {
        const { fields } = this.state

        const { content } = this.props.userData
        const { open } = this.state
        return (
            < div className="Home" >
                <AppNavbar />
                <Modal open={open} toggle={this.toggle} title="Add Story" >

                </Modal>
                <Slider toggle={this.toggle} />
                <Modal open={open} toggle={this.toggle} title="Add Story" >
                    {
                        Object.keys(fields).map((field, key) => (
                            <InputField field={fields[field]} key={key} onChange={this.onChange} />
                        ))
                    }
                    <p style={{ textAlign: 'right' }}><button className="btn btnaction" >Add</button></p>
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
                                    <p className="sumry">
                                        <h4 style={{ textAlign: 'center' }}>{user.headline}</h4>
                                        {stripd(user.story, 100)}
                                        <span onClick={() => this.onReadMore(user.story)}> ...read more</span>
                                    </p>
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