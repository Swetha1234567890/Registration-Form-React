// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    showFirstNameErr: false,
    showLastNameErr: false,
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  checkingFirstName = event => {
    if (event.target.value === '') {
      this.setState({showFirstNameErr: true})
    } else {
      this.setState({showFirstNameErr: false})
    }
  }

  checkingLastName = event => {
    if (event.target.value === '') {
      this.setState({showLastNameErr: true})
    } else {
      this.setState({showLastNameErr: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        showFirstNameErr: false,
        showLastNameErr: false,
        firstName: '',
        lastName: '',
        isFormSubmitted: true,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({showFirstNameErr: true, showLastNameErr: false})
    } else if (firstName !== '' && lastName === '') {
      this.setState({showFirstNameErr: false, showLastNameErr: true})
    } else {
      this.setState({showFirstNameErr: true, showLastNameErr: true})
    }
  }

  resetForm = () => {
    this.setState({isFormSubmitted: false})
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameErr,
      showLastNameErr,
      isFormSubmitted,
    } = this.state

    const firstNameEmpty = showFirstNameErr ? 'first-err' : 'first-name'
    const lastNameEmpty = showLastNameErr ? 'last-err' : 'last-name'

    return (
      <div className="background-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? (
          <div className="submit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="tick-img"
            />
            <p className="success-text">Submitted Successfully</p>
            <button
              type="submit"
              className="an-submit-btn"
              onClick={this.resetForm}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="first-name-container">
              <label className="first-label" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                placeholder="First Name"
                className={`${firstNameEmpty}`}
                onChange={this.onChangeFirstName}
                onBlur={this.checkingFirstName}
              />
              {showFirstNameErr && <p className="error-message">*Required</p>}
            </div>
            <div className="last-name-container">
              <label className="last-label" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                placeholder="Last Name"
                className={`${lastNameEmpty}`}
                onChange={this.onChangeLastName}
                onBlur={this.checkingLastName}
              />
              {showLastNameErr && <p className="error-message">*Required</p>}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
