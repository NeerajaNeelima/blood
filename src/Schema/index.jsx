import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  blood: Yup.string().min(2).required("Please enter your Blood Type"),
  phoneno: Yup.number().min(10).required("Please enter your Phone no"),
  address: Yup.string().min(6).required("Please enter your Address"),
});

