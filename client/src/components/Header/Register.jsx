import React from "react";
import { Button, Typography, TextField, Switch } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { createOne } from "../../services/user";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const PhoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string("Enter your password").min(6, 'Password length at least 6.').required("Password is required"),
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  phone: yup.string().matches(PhoneRegExp, "Phone number is not valid").required("Phone number is required"),
  city: yup.string().required("City is required"),
  street: yup.string().required("Street is required"),
  number: yup.number().required("Number is required"),
  zipcode: yup.string().required("Zipcode is required"),
});

const Input = ({ name, value, onChange, onBlur, error, helperText, label, type }) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      helperText={helperText}
      onBlur={onBlur}
      error={error}
      label={label}
      type={type}
    />
  );
};

export const Register = ({ checked, toggleChecked, userLocation, handleClose }) => {
  const [alert, setAlert] = React.useState(false);
  const [error, setError] = React.useState(false);
  const Elements = [
    "username",
    "email",
    "password",
    "firstname",
    "lastname",
    "phone",
    "city",
    "street",
    "number",
    "zipcode",
  ];

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => { 
      try{
        if(values){
          const user = {
            body: {
              username: values.username,
              email: values.email,
              password: values.password,
              name: {
                firstname: values.firstname,
                lastname: values.lastname,
              },
              phone: values.phone,
              address: {
                geolocation: {
                  lat: userLocation.lat,
                  long: userLocation.long
                },
                city: values.city,
                street: values.street,
                number: values.number,
                zipcode: values.zipcode,
              }
            }
          }
          const response = await createOne(user)
          if(response){
            setAlert(true)
            setTimeout(() => {
              setAlert(false)
              handleClose()
            }, 3000)
          }
          }else{
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 3000)
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
      autoComplete={"false"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      {Elements.map((element) => {
        return(
          <Input
            key={element}
            name={element}
            value={formik.values[element]}
            onChange={formik.handleChange}
            helperText={formik.touched[element] && formik.errors[element]}
            onBlur={formik.handleBlur}
            error={formik.touched[element] && Boolean(formik.errors[element])}
            label={element.slice(0, 1).toUpperCase() + element.slice(1)}
            type={[ "password", "email", "number" ].includes(element) ? element : "text"}
          />
        )
      }
      )}
      <Typography variant="body2">
        Already have an account?{" "}
        <Switch checked={checked} onChange={() => toggleChecked()} />
      </Typography>
      {alert && <Alert severity="success" icon={<CheckIcon />}>User created successfully</Alert>}
      {error && <Alert severity="error">An error has occurred</Alert>}
      <Button
        sx={{
          backgroundColor: "#818CB3",
          padding: "1em",
          paddingInline: "5em",
          color: "white",
        }}
        children="Register"
        type="submit"
      />
    </form>
  );
};
