import { Formik, Field, Form } from "formik";

const DemoFormik = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Huseyin",
          lastName: "Turkmenoglu",
          email: "turkmenogluhuseyin@gmail.com",
          gender: "female",
          hobies: [],
          country: "en",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Jane"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <br />
            <br />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />{" "}
              Football
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />{" "}
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Travel"
                onChange={handleChange}
              />{" "}
              Travel
            </div>

            <br />
            <br />
            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="tr">Türkiye</option>
              <option value="en">England</option>
              <option value="uk">Ukraine</option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        )}

        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form> */}
      </Formik>
    </>
  );
};

export default DemoFormik;
