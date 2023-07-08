import React from "react";
import { useFormik } from "formik";
import { emergency } from "../../Schema/emergency";
import '../Register/Register.css'
import Footer from "../../Components/Footer/Footer";
const initialValues = {
  pname: "",
  pemail: "",
  pblood:"",
  pphoneno: "",
  paddress: "",
};

const Emergency = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: emergency,
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
                     Patient Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="pname"
                      id="name"
                      placeholder="Name"
                      value={values.pname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                     Patient Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="pemail"
                      id="email"
                      placeholder="Email"
                      value={values.pemail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="blood-type" className="input-label">
                     Patient Blood Type
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="blood-type"
                      id="blood-type"
                      placeholder="Blood Type"
                      value={values.pblood}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.pblood && touched.pblood ? (
                      <p className="form-error">{errors.pblood}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="Contact" className="input-label">
                     Patient Phone No.
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="p-phoneno"
                      id="phoneno"
                      placeholder="Phone No."
                      value={values.pphoneno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.pphoneno && touched.pphoneno ? (
                      <p className="form-error">{errors.pphoneno}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="Address" className="input-label">
                     Patient Current Location
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values.paddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.paddress && touched.paddress ? (
                      <p className="form-error">{errors.paddress}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    
                    <button className="input-button" type="submit">
                      Request
                    </button>
                  </div>
                </form>
                
              </div>
              <div className="modal-right">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682309570054-e2fdcbb2c682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80"
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



export default Emergency;