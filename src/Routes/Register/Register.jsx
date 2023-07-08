import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../../Schema";
import './Register.css'
import Footer from "../../Components/Footer/Footer";

const initialValues = {
  name: "",
  email: "",
  blood:"",
  phoneno: "",
  address: "",
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To the thapa technical website for programmers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="blood-type" className="input-label">
                      Blood Type
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="blood-type"
                      id="blood-type"
                      placeholder="Blood Type"
                      value={values.blood}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.blood && touched.blood ? (
                      <p className="form-error">{errors.blood}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="Contact" className="input-label">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="phoneno"
                      id="phoneno"
                      placeholder="Phone No."
                      value={values.phoneno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phoneno && touched.phoneno ? (
                      <p className="form-error">{errors.phoneno}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="Address" className="input-label">
                      Address
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};



export default Register;