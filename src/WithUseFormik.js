import { useFormik } from "formik";

const WithUseFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>With useFormik</h1>
      <label htmlFor="firstName">First Name </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br />
      <br />
      <label htmlFor="lastName">Last Name </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <br />
      <br />
      <label htmlFor="email">Email Address </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
      {JSON.stringify(formik.values)}
    </form>
  );
};

export default WithUseFormik;
