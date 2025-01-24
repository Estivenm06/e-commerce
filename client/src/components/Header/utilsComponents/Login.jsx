import { Button, Typography, TextField, Switch } from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { login } from "../../../services/login.js";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .required("Username is required"),
  password: yup.string("Enter your password").min(6, 'Password length at least 6').required("Password is required"),
});

export const Login = ({ checked, toggleChecked, setUser }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try{
        const user = {
          credentials: {
            username: values.username,
            password: values.password,
          },
        };
        const response = await login(user).catch(error => {setError(true); setMessage(error.response.data.error); setTimeout(() => {setError(false); setMessage(null)}, 3000)})
        if (response) {
          localStorage.setItem("userLogged", JSON.stringify(response));
          setUser(response)
          navigate('/')
          window.location.reload()
        }
      }catch(error){
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
        console.log(error)
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2em",
      }}
      autoComplete={"false"}
    >
      <TextField
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        helperText={formik.touched.username && formik.errors.username}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        label="Username"
        type="username"
      />
      <TextField
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        helperText={formik.touched.password && formik.errors.password}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        label="Password"
        type="password"
      />
      <Typography variant="body2">
        Do not have an account?{" "}
        <Switch checked={checked} onChange={() => toggleChecked()} />
      </Typography>
      {error && <Alert severity="error">{message}</Alert>}
      <Button
        type="submit"
        sx={{
          backgroundColor: "#818CB3",
          padding: "1em",
          paddingInline: "5em",
          color: "white",
        }}
        children="Login"
      />
    </form>
  );
};
