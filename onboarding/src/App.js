import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import Form from './Form';
import formSchema from './formSchema'
import './App.css';

const AppDiv = styled.div`
  max-height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1c4e76;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  background-color: white;
  border-left: solid 4px black;
  
  strong {
      color: black;
    }
  
  div {
    color: white;
    border: 4px solid black;
    margin: 2% 2%;
    background-color: #399dec;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    &:hover {
      background-color: #60b0ef;
    }
    }
`;

const initialFormValues = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  password_two: '',
  terms: ''
};

const initialErrorMessages = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  password_two: '',
  terms: ''
};

const initialTeam = [];
const initialDisabled = true;

function App() {

  const apiURL = 'https://reqres.in/api/users';

  const [teamMembers, setTeamMembers] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrorMessages);
  const [disabled, setDisabled] = useState(initialDisabled);

 const getMembers = () => {
  axios.get(apiURL)
    .then(suc => {
      setTeamMembers(suc.data.data)
    })
    .catch(err => {
      console.log(err)
    })
 };

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
};

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
};

  

  console.log(teamMembers);

  const submit = () => {
    const newTeamMember = {
      first_name: formValues['first_name'],
      last_name: formValues['last_name'],
      username: formValues['username'],
      email: formValues['email'],
      password: formValues['password'],
      password_two: formValues['password_two'],
      terms: formValues['terms']
    }

    postNewMember(newTeamMember)
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
        ...formValues.terms,
        [name]: isChecked, 
      })
    };

  useEffect(() => {
    getMembers()
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
  
  return (


    <AppDiv className="App">
      <Form errors={formErrors} checkboxChange={checkboxChange} disabled={disabled} inputChange={inputChange} values={formValues} submit={submit} />
      <StyledDiv>
      {
        teamMembers.map(mem => {
          return (
            <div key={mem.id}>
              <p><strong>Member Name:</strong>     {mem['first_name']} {mem['last_name']}</p>
              <p><strong>Member Username:</strong>     {mem['username']}</p>
              <p><strong>Member Email:</strong>     {mem['email']}</p>
              <p><strong>Member ID:</strong>     {mem.id}</p>
            </div>
          )
        })
      }
      </StyledDiv>
    </AppDiv>
  );
}

export default App;
