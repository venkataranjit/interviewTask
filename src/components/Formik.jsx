import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  email: "",
  description: "",
};

const Form3 = () => {
  const [val, setVal] = useState({});
  const validationSchema = Yup.object({
    userName: Yup.string().required("enter any name"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email required"),
    description: Yup.string().required("Enter any Description"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setVal(values);
    resetForm();
  };
  return (
    <>
      <h4>Yup Validation for Formik Component</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          // console.log(formikProps);
          const { errors, touched } = formikProps;
          return (
            <Form>
              <Field
                name="userName"
                className="form-control mb-3"
                placeholder="User Name"
              />
              {touched.userName && errors.userName && (
                <div variant="danger">{errors.userName}</div>
              )}
              <Field
                name="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <div variant="danger">{errors.email}</div>
              )}
              <Field
                name="description"
                className="form-control mb-3"
                placeholder="Description"
                as="textarea"
              />
              {touched.description && errors.description && (
                <div variant="danger">{errors.description}</div>
              )}
              <button type="submit">Sumbit</button>
            </Form>
          );
        }}
      </Formik>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            {Object.keys(initialValues).map((k, index) => (
              <th key={index}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{val.userName}</td>
            <td>{val.email}</td>
            <td>{val.description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Form3;
