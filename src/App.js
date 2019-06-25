import React from 'react';
import HomePage from './views/HomePage'
import './App.scss';


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // state = {
  //   open: false,
  //   fields: {
  //     firstname: {
  //       name: "firstname",
  //       title: "Firstname",
  //       error: "",
  //       value: '',
  //       type: 'text'
  //     },
  //     lastname: {
  //       name: "lastname",
  //       title: "Lastname",
  //       error: "",
  //       value: '',
  //       type: 'text'
  //     },
  //     username: {
  //       name: "username",
  //       title: "Username",
  //       error: "",
  //       value: '',
  //       type: 'text'
  //     },
  //     gender: {
  //       name: "gender",
  //       title: "Gender",
  //       error: "",
  //       choices: [
  //         { label: 'Male', value: 1, checked: false },
  //         { label: 'Female', value: 2, checked: false }
  //       ],
  //       type: 'radio'
  //     },
  //     headline: {
  //       name: "headline",
  //       title: "Headline",
  //       error: "",
  //       value: '',
  //       type: 'text'
  //     },
  //     story: {
  //       name: "story",
  //       title: "Share your story here...",
  //       row: 5,
  //       error: "",
  //       value: '',
  //       type: 'textarea'
  //     }
  //   }
  // }

  // onChange = (name, value) => {
  //   const { fields } = this.state
  //   this.setState({
  //     fields: {
  //       ...fields,
  //       [name]: {
  //         ...this.state.fields[name],
  //         value
  //       }
  //     }
  //   })
  // }

  // toggle = () => {
  //   this.setState(preVState => ({
  //     open: !preVState.open
  //   }))
  // }
  render() {
    //   const { fields } = this.state


    //   const { open } = this.state
    return (
      <div className="App" >

        <HomePage />

      </div>
    );
  }
}

export default App;
