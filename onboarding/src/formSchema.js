import * as yup from 'yup'

function equalTo(ref, msg) {
	return this.test({
    name: 'equalTo',
    msg: msg || "Passwords must match!",
		params: {
			reference: ref.path
		},
		test: function(value) {
      return value === this.resolve(ref) 
		}
	})
};

yup.addMethod(yup.string, 'equalTo', equalTo);

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is Required"),
  last_name: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is Required"),
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .required("Username is required"),
  email: yup
    .string()
    .min(5, "Email must be at least 5 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_two: yup
    .string()
    .min(8, "Passwords must match!")
    .required("Password is required")
    .equalTo(yup.ref('password'), "Passwords must match"),
  terms: yup
    .string()
    .required("Must agree to Terms and Condtions")
})

export default formSchema
