import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form';
import formSchema from './formSchema'
import './App.css';

const initialFormValues = {
  first_name: '',
}

const initialErrorMessages = {
  first_name: '',
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
      first_name: formValues['first_name']
    }

    postNewMember(newTeamMember)
  }

  useEffect(() => {
    getMembers()
  }, [])
  
  return (


    <div className="App">
      <Form inputChange={inputChange} values={formValues} submit={submit} />
      {
        teamMembers.map(mem => {
          return (
            <div key={mem.id}>
              <p>{mem.id}</p>
              <p>{mem['first_name']}</p>
              <p>{mem['last_name']}</p>
              <p>{mem['email']}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
