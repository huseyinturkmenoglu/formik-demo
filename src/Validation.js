import * as yup from 'yup';

let validations = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(5).required('Password is required'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Password is required'),
});

export default validations;