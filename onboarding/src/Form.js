import React from 'react';

function Form(props) {
    const {inputChange, values, submit} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }
    
      console.log(values);

    return (
    <div>
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

        <button>Submit</button>
        </form>
    </div>
    )
}

export default Form