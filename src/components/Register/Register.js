import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import logo from "../../assets/logo.png";
import gameImg from "../../assets/gaming.ebaf2ffc84f4451d.jpg";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .min(3, "First Name length must be between 3 to 20 character")
      .max(20, "First Name length must be between 3 to 20 character")
      .required("First name is required"),
    last_name: Yup.string()
      .min(3, "Last Name length must be between 3 to 20 character")
      .max(20, "Last Name length must be between 3 to 20 character")
      .required("Last name is required"),
    email: Yup.string().email("Email is required"),
    age: Yup.number()
      .min(1, "Age must be between 1 to 100")
      .max(100, "Age must be between 1 to 100")
      .required("age is required"),
    password: Yup.string()
      .min(8, "Min length is 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      age: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  async function handleRegister(values) {
    setLoading(true);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_REGISTERATION_API_URL + "/signup",
        values
      );
      console.log(data);
      setLoading(false);
      // navigate("/");
    } catch (error) {
      console.log(error)
      setApiError(error.message);
    }
  }

  const [apiError, setApiError] = useState("");
  return (
    <>
      <div className="row">
        <div className="col-md-6 ">
          <img src={gameImg} alt="gaming" className="w-100" />
        </div>
        <div className="col-md-6 text-center">
          <img src={logo} alt="GameOver" className="w-25 " />
          <h2 className="h3">Create My Account!</h2>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-6 ">
                <input
                  className="form-control my-2"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  id="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                  <div className="alert alert-danger">
                    {formik.errors.first_name}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 ">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control my-2"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  id="last_name"
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="alert alert-danger">
                    {formik.errors.last_name}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control my-2"
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}

              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control my-2"
                type="number"
                placeholder="Age"
                name="age"
                id="age"
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="alert alert-danger">{formik.errors.age}</div>
              ) : (
                ""
              )}

              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control my-2"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}
              {loading ? (
                <button className="btn btn-secondary text-white my-2">
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                <button className="btn btn-secondary text-white my-2" type="submit">
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
