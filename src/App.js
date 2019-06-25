import React from 'react';
import AppNavbar from './components/Navbar'
import InputField from './components/InputFields'
import Slider from './components/Slider'
import Modal from './components/Modal'
import { Row, Col } from 'reactstrap'
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false,
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


    const { open } = this.state
    return (
      <div className="App" >
        <AppNavbar />
        <Slider toggle={this.toggle} />
        <Modal open={open} toggle={this.toggle} title="Add Story" >
          {
            Object.keys(fields).map((field, key) => (
              <InputField field={fields[field]} key={key} onChange={this.onChange} />
            ))
          }
        </Modal>
        <div style={{ padding: '20px 25px' }}>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((a, i) => (
              <Col sm="4" key={i} style={{ padding: '0px' }}>
                <div className="story">
                  <p className="avtit">
                    <span className=" av">avatar</span>
                    <span className="hdln">Story Headline</span>
                  </p>
                  <p className="sumry">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...
                </p>
                  <p><span className="like"> Liked by 200 people</span></p>



                </div>

              </Col>

            ))}
          </Row>
        </div>



      </div>
    );
  }
}

export default App;
