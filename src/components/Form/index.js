import React from 'react';

import * as yup from 'yup';
import { useFormik } from 'formik';
import {
    Grid,
    Typography,
    Button,
    TextField
} from '@material-ui/core';


yup.addMethod(yup.string, 'hasNumber', function (msg) {
    return this.test({
        name: 'length',
        message: msg,
        test: value => {
            const regex = /[0-9]/
            return !regex.test(value)
        }
    });
});

const FORM_VALIDATION = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .hasNumber('Name cannot contain numbers.'),

    address: yup
        .string(),
    phone: yup
        .number()   
        .integer()
        .typeError('Must be 11999990000')       
        .required('Phone is required'),
    email: yup
        .string()
        .email('Invalid email.')
        .required('Email is required'),
    dateBirthday: yup
        .date()
        .required('Birthday is required'),

});

const INITIAL_FORM_STATE = {
    name: '',
    address: '',
    phone: '',
    email: '',
    dateBirthday: '',
};

export default function AddressForm() {
    const formik = useFormik({
        initialValues: INITIAL_FORM_STATE,
        validationSchema: FORM_VALIDATION,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Full name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="dateBirthday"
                        name="dateBirthday"
                        label="Birthday"
                        type='date'
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.dateBirthday}
                        onChange={formik.handleChange}
                        error={formik.touched.dateBirthday && Boolean(formik.errors.dateBirthday)}
                        helperText={formik.touched.dateBirthday && formik.errors.dateBirthday}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography>
                        Address
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="address"
                        name="address"
                        label="Address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </Grid>

            </Grid>
        </form>
    );
}