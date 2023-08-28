import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import logo from '../../assets/logo.png'
import gameImg from "../../assets/gaming.ebaf2ffc84f4451d.jpg";
import { useNavigate } from "react-router-dom";

export default function Register() {
let navigate=useNavigate()
  
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is required"),

    password: Yup.string()
      .min(8, "Min length is 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  async function handleLogin(values) {
    setLoading(true);
    try {
      const {data} = await axios.post(
        process.env.REACT_APP_REGISTERATION_API_URL+'/signin',
        values
      );
     
      // localStorage.setItem("userToken",data.token);
      navigate("/home");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setApiError(error.message);
    }

  }

  const [apiError, setApiError] = useState("");
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 ">
          <img src={gameImg} alt="gaming" className="w-100" />
        </div>
        <div className="col-md-6 text-center">
          <img src={logo} alt="GameOver" className="w-25 " />
          <h2 className="h3">Login in your Account!</h2>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}
          <form onSubmit={formik.handleSubmit}>
            <div>
              
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control my-3 mx-auto"
                type="text"
                placeholder="Email"
                name="email"
                id="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}

              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control mx-auto my-3"
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
                <button className="btn btn-secondary text-white">
                  {" "}
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                <button className="btn btn-secondary text-white">Login</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
