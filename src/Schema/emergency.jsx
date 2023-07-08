import * as Yup from "yup";

export const emergency = Yup.object({
  pname: Yup.string().min(2).max(25).required("Please enter your name"),
  pemail: Yup.string().email().required("Please enter your email"),
  pblood: Yup.string().min(2).required("Please enter your Blood Type"),
  pphoneno: Yup.number().min(10).required("Please enter your Phone no"),
  paddress: Yup.string().min(6).required("Please enter your Address"),
});

