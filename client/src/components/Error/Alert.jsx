import React from "react";
import { Alert as AlertUI, AlertTitle } from "@mui/material";
import { Check, Error as ErrorIcon } from "@mui/icons-material";

const Success = ({success}) => {
    if(!success || success.length === 0){
        return null
    }
  return (
    <>
      <AlertUI icon={<Check fontSize="inherit" />} severity="success" variant="filled" sx={{transition: '0.4s'}}>
        <AlertTitle>Success</AlertTitle>
        {success.message}
      </AlertUI>
    </>
  );
};

const Error = ({error}) => {
    if(!error || error.length === 0){
        return null
    }
  return (
    <>
      <AlertUI icon={<ErrorIcon fontSize="inherit" />} severity="error" variant="filled" sx={{transition: '0.4s'}}>
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </AlertUI>
    </>
  );
};

export const Alert = ({ alert }) => {
  if (!alert) {
    return null;
  }
  return (
    <>
      {alert.type === "error" ? (
        <Error error={alert} />
      ) : (
        <Success success={alert} />
      )}
    </>
  );
};
