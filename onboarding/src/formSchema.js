import * as yup from 'yup'

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "First name must be at least 5 characters")
    .required("First name is Required"),
  role: yup
    .string()
    .oneOf(['tl', 'instructor', 'alumni', 'student'], "Role is required"),
  civil: yup
    .string()
    .oneOf(['married', 'single'], "Civil status is required")
})

export default formSchema
