import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  age: "",
  gender: "",
  skills: [],
  id: null,
};

const SamplePage = () => {
  const [data, setData] = useState({});

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "3 characters Required")
      .required("Required Feild"),
    age: Yup.number()
      .typeError("Only Numbers allowed")
      .max(99, "Maximum value is 99")
      .required("Required Feild"),
    gender: Yup.string().required("Please select your gender"),
    skills: Yup.array().min(1, "Select at least one skill"),
  });

  const submitHandler = (values, { resetForm }) => {
    setData({ ...values, id: Math.random() });
    resetForm();
  };
  console.log(data);
  return (
    <div>
      <h2>Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(formikProps) => {
          const { isValid, dirty } = formikProps;
          return (
            <Form>
              <Field name="name" placeholder="Name" />
              <br />
              <ErrorMessage name="name" />
              <br />
              <Field name="age" placeholder="Age" />
              <br />
              <ErrorMessage name="age" />
              <br />
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <br />
              <ErrorMessage name="gender" />
              <br />
              <label>
                <Field type="checkbox" name="skills" value="html" /> HTML
              </label>
              <label>
                <Field type="checkbox" name="skills" value="css" /> Css
              </label>
              <label>
                <Field type="checkbox" name="skills" value="javascript" />{" "}
                Javascript
              </label>{" "}
              <br />
              <ErrorMessage name="skills" /> <br />
              <button disabled={!(isValid && dirty)} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SamplePage;
