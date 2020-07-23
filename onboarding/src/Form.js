import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  padding: 2%;

  div {
    color: #39ece1;
  }

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    label, input  {
      margin: .5% 0;
    }

    button  {
      padding: 2%;
      background-color: #cc333e;
      color: white;
      font-size: 1.25rem;

      &:hover  {
        background-color: #ee505a;
      }
    }

    .cent  {
      margin: 2% auto;
    }
  }

  .error {
    color: red;
  }
`

function Form(props) {
  const {checkboxChange, disabled, errors, inputChange, values, submit} = props;

  const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }

    const onInputChange = evt => {
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
        <h1>Add to your Build Week Team!</h1>

        <form onSubmit={onSubmit}>
        <label htmlFor='first_nameInput'>First Name:</label>
        <input
            id='first_nameInput'
            minLength='3'
            maxLength='25'
            name='first_name'
            onChange={onInputChange}
            placeholder='Enter your first name'
            type='text'
            value={values['first_name']}   
        />
        <div className='errors'>{errors['first_name']}</div>

        <label htmlFor='last_nameInput'>Last Name:</label>
        <input
            id='last_nameInput'
            minLength='3'
            maxLength='25'
            name='last_name'
            onChange={onInputChange}
            placeholder='Enter your last name'
            type='text'
            value={values['last_name']}   
        />
        <div className='errors'>{errors['last_name']}</div>

        <label htmlFor='usernameInput'>Username:</label>
        <input
            id='usernameInput'
            minLength='5'
            maxLength='15'
            name='username'
            onChange={onInputChange}
            placeholder='Enter a username'
            type='text'
            value={values['username']}   
        />
        <div className='errors'>{errors['username']}</div>

        <label htmlFor='emailInput'>Email:</label>
        <input
            id='emailInput'
            minLength='5'
            maxLength='200'
            name='email'
            onChange={onInputChange}
            placeholder='Enter your email'
            type='email'
            value={values['email']}   
        />
        <div className='errors'>{errors['email']}</div>

        <label htmlFor='password'>Password:</label>
        <input
            id='passwordInput'
            minLength='5'
            maxLength='200'
            name='password'
            onChange={onInputChange}
            placeholder='Enter a password'
            type='password'
            value={values['password']}   
        />
        <div className='errors'>{errors['password']}</div>

        <label htmlFor='password_two'>Confrim Password:</label>
        <input
            id='password_twoInput'
            minLength='5'
            maxLength='200'
            name='password_two'
            onChange={onInputChange}
            placeholder='Enter a password'
            type='password'
            value={values['password_two']}   
        />
        <div className='errors'>{errors['password_two']}</div>

        <label htmlFor='terms'>Terms and Condtions:</label>
        <input
          type="checkbox"
          required
          name='terms'
          checked={values.terms === true}
          onChange={onCheckboxChange}
          className="cent"
        />

        <button disabled={disabled}>Submit</button>
        </form>
    </StyledDiv>
    )
}

export default Form