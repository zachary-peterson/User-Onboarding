import * as yup from 'yup'

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "First name must be at least 5 characters")
    .required("First name is Required"),
  last_name: yup
    .string()
    .min(3, "Last name must be at least 5 characters")
    .required("Last name is Required"),
  username: yup
    .string()
    .min(5, "Username must be valid")
    .required("Username is required"),
  email: yup
    .string()
    .min(5, "Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be valid")
    .required("Password is required"),
})

export default formSchema
