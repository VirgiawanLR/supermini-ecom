import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/customForm";
import { postUserData } from "../features/users/userSlice";
import { useDispatch } from "react-redux";

function LearnForm() {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Must not blank"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Must not blank"),
    password: Yup.string()
      .min(3, "password must at least 3 characters")
      .required("Must not blank"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Must not blank"),
  });

  const onSubmit = (value, actions) => {
    actions.resetForm();
    dispatch(postUserData(value));
  };

  return (
    <div className="py-10 w-full relative px-6">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form className=" shadow-2xl pt-5 pb-10 px-10 mt-15 w-1/3 mx-auto flex flex-col rounded-3xl">
              <h1 className="mx-auto font-bold text-lg pb-5">Sign Up Form</h1>
              <div className="flex flex-col w-full mb-2 ml-10">
                <CustomInput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder=" Enter your username"
                />
              </div>
              <div className="flex flex-col w-full mb-2 ml-10">
                <CustomInput
                  label="Email"
                  name="email"
                  type="text"
                  placeholder=" your@email.com"
                />
              </div>
              <div className="flex flex-col w-full mb-2 ml-10">
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder=" Enter your password"
                />
              </div>
              <div className="flex flex-col w-full mb-2 ml-10">
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder=" Confirm your password"
                />
              </div>
              <div className="flex flex-col w-full mb-2 ml-10">
                <button
                  type="submit"
                  class="w-3/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center dark:bg-blue-600 
                dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LearnForm;
