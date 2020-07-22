import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

function Form(props) {
  const {checkboxChange, inputChange, values, submit} = props;

  const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }

    const onChange = evt => {
      const { name, value } = evt.target
      inputChange(name, value)
    }

    console.log(values);

    const onCheckboxChange = evt => {
      const { name, checked } = evt.target
      checkboxChange(name, checked)
    }

    return (
    <StyledDiv>
        <h1>Add to your Team!</h1>

        <form onSubmit={onSubmit}>
        <label htmlFor='first_nameInput'>First Name:</label>
        <input
            id='first_nameInput'
            minLength='3'
            maxLength='25'
            name='first_name'
            onChange={onChange}
            placeholder='Enter your first name'
            type='text'
            value={values['first_name']}   
        />

        <label htmlFor='last_nameInput'>Last Name:</label>
        <input
            id='last_nameInput'
            minLength='3'
            maxLength='25'
            name='last_name'
            onChange={onChange}
            placeholder='Enter your last name'
            type='text'
            value={values['last_name']}   
        />

        <label htmlFor='usernameInput'>Username:</label>
        <input
            id='usernameInput'
            minLength='5'
            maxLength='15'
            name='username'
            onChange={onChange}
            placeholder='Enter a username'
            type='text'
            value={values['username']}   
        />

        <label htmlFor='emailInput'>Email:</label>
        <input
            id='emailInput'
            minLength='5'
            maxLength='200'
            name='email'
            onChange={onChange}
            placeholder='Enter your email'
            type='email'
            value={values['email']}   
        />

        <label htmlFor='password'>Passwod:</label>
        <input
            id='passwordInput'
            minLength='5'
            maxLength='200'
            name='password'
            onChange={onChange}
            placeholder='Enter a password'
            type='password'
            value={values['password']}   
        />

        <label htmlFor='terms'>Terms and Condtions:</label>
        <input
          type="checkbox"
          required
          name='terms'
          checked={values.terms === true}
          onChange={onCheckboxChange}
        />

        <button>Submit</button>
        </form>
    </StyledDiv>
    )
}

export default Form