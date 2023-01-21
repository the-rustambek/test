import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from "../../Assets/Img/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const history = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            phone_number: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(1, 'Ism notogri')
            .required(`Name  to'ldirilishi shart`),
            phone_number: Yup.string()
                .min(1, 'Telefon raqam notogri')
                .required(`Telefon raqam to'ldirilishi shart`),
            email: Yup.string().min(1, 'Invalid phone ').email('@ belgisidan foydalaning').required(`Email to'liq to'g'ri to'ldirilishi shart`),
        }),
        onSubmit: values => {
             axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", values);
             history("/")
        },
    });

    return (
        <div>
            <div style={{ height: "100vh" }} className=" d-flex justify-content-evenly align-items-center  ">
                <Form noValidate  className="w-25" onSubmit={formik.handleSubmit} >
                    <h2 className="text-center mb-4 pb-2" style={{ color: "#838383" }}>Login</h2>
                    <Form.Group className="w-100 my-3" as={Col} md="4" controlId="validationCustom01">
                        <Form.Control
                            required className='px-4 py-3'
                            type="text"
                            placeholder="Name"
                            {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}
                     </Form.Group>
                    <Form.Group className="w-100 my-3" as={Col} md="4" controlId="validationCustom02">
                        <Form.Control
                            required className='px-4 py-3'
                            type="text"
                            placeholder="Contact"
                            {...formik.getFieldProps('phone_number')} />
                        {formik.touched.phone_number && formik.errors.phone_number ? (
                            <div>{formik.errors.phone_number}</div>
                        ) : null}
                     </Form.Group>
                    <Form.Group className="w-100 my-3" as={Col} md="4" controlId="validationCustom03">
                        <Form.Control
                            required className='px-4 py-3'
                            type="email"
                            placeholder="email"
                            {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                     </Form.Group>
                    <Button type="submit" className='w-100 mt-2 py-3'>LOGIN</Button>
                </Form>
                <img src={logo} alt="logo" style={{objectFit:"cover", width:"350px"}} />
            </div>
        </div>
    );
};
export default Login;