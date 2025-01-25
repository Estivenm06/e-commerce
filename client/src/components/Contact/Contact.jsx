import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import React from "react";
import * as yup from 'yup'
import { useFormik } from "formik";

const validationSchema = yup.object({
    firstName: yup.string('').required('First name required'),
    secondName: yup.string('').required('Second name required'),
    email: yup.string('').email().required('Email required'),
    message: yup.string('').required('')
})

export const Contact = ({setAlert}) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values){
                setAlert({message: 'This information has been saved.', type: 'success'})
                setTimeout(() => setAlert(null), 2000)
            }
        }
    })
    return (
        <Box sx={{paddingInline: '10%', my: '2em'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: 1000, border: '1px solid grey', borderRadius: '0.5em', width: '100%', padding: '3em'}}>
                <Box sx={{ display: 'flex',  width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '2.5em'}}>
                <Typography children='Contact Us' variant="h4"/>
                </Box>
                <Divider flexItem />
                <form onSubmit={formik.handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em' }}>
                <Typography children='Full Name' variant="subtitle1" sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', paddingBottom: '1em'}}/>
                <Box autoComplete="off" noValidate sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <TextField required name="firstName" value={formik.values.firstName} onChange={formik.handleChange} error={formik.touched.firstName && Boolean(formik.errors.firstName)} onBlur={formik.handleBlur} helperText={formik.touched.firstName && formik.errors.firstName} label='First Name' size="small" sx={{width: '45%'}}/>
                    <TextField required name="secondName" value={formik.values.secondName} onChange={formik.handleChange} error={formik.touched.secondName && Boolean(formik.errors.secondName)} onBlur={formik.handleBlur} helperText={formik.touched.secondName && formik.errors.secondName} label='Second Name' size="small" sx={{width: '45%'}}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em' }}>
                <Typography children='E-mail' variant="subtitle1" sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', paddingBottom: '1em'}}/>
                <Box autoComplete="off" noValidate sx={{AlignItems: 'center', width: '100%'}}>
                    <TextField required name="email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} onBlur={formik.handleBlur} helperText={formik.touched.email && formik.errors.email} label='example@example.com' size="small" sx={{ width: '80%'}}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2em' }}>
                <Typography children='Message' variant="subtitle1" sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', paddingBottom: '1em'}}/>
                <Box autoComplete="off" noValidate sx={{ alignItems: 'center', width: '100%'}}>
                    <TextField required name="message" value={formik.values.message} onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} onBlur={formik.handleBlur} helperText={formik.touched.message && formik.errors.message}  size="small" sx={{width: '100%'}} multiline rows={5}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '1em', justifyContent: 'center', alignContent: 'center'}}>
                <Button type="submit" children={<Typography variant="button" children='SUBMIT'/>} sx={{ width: '30%', backgroundColor: 'black', color: 'white'}}></Button>
                </Box>
                </form>
            </Box>
        </Box>
        )
}