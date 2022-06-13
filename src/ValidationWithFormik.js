import { useFormik } from "formik";
import validations from "./Validation";

const ValidationWithFormik = () => {
  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
      validationSchema: validations,
    });

  return (
    <>
      <h1>Validation with Formik</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <p className="errors">{errors.email}</p>}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <p className="errors">{errors.password}</p>}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <p className="errors">{errors.passwordConfirm}</p>}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </>
  );
};

export default ValidationWithFormik;
