import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import Form from './Form';
import formSchema from './formSchema'
import './App.css';

const AppDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledDiv = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100vh;
`

const initialFormValues = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  terms: ''
}

const initialErrorMessages = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  terms: ''
}

const initialTeam = []

function App() {

  const apiURL = 'https://reqres.in/api/users';

  const [teamMembers, setTeamMembers] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrorMessages)

 const getMembers = () => {
  axios.get(apiURL)
    .then(suc => {
      setTeamMembers(suc.data.data)
    })
    .catch(err => {
      console.log(err)
    })
 }

 const postNewMember = newTeamMember => {
  axios.post(apiURL, newTeamMember)
    .then(suc => {
      debugger
      console.log(suc.data)
      setTeamMembers([suc.data, ...teamMembers])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
    })
}

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

  setFormValues({
    ...formValues,
    [name]: value
  })
}

  console.log(teamMembers);

  const submit = () => {
    const newTeamMember = {
      first_name: formValues['first_name'],
      last_name: formValues['last_name'],
      username: formValues['username'],
      email: formValues['email'],
      password: formValues['password']
    }

    postNewMember(newTeamMember)
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
        ...formValues.terms,
        [name]: isChecked, 
      })
    }

  useEffect(() => {
    getMembers()
  }, [])
  
  return (


    <AppDiv className="App">
      <div>
      <Form checkboxChange={checkboxChange} inputChange={inputChange} values={formValues} submit={submit} />
      </div>
      <StyledDiv>
      {
        teamMembers.map(mem => {
          return (
            <div key={mem.id}>
              <p>{mem.id}</p>
              <p>{mem['first_name']} {mem['last_name']}</p>
              <p>{mem['username']}</p>
              <p>{mem['email']}</p>
            </div>
          )
        })
      }
      </StyledDiv>
    </AppDiv>
  );
}

export default App;
