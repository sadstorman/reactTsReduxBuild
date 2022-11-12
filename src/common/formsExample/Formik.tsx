import { Formik, Form } from "formik";

import * as Yup from 'yup'

import { MyCheck, MySelect, MyTextInput } from "../components";

import '../styles/styles.css'

export const FormikAbstractation = () => {


    return (
        <div>
            <h1> Formik Abstract</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(value) => {
                    console.log(value);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'debe tener 15 chars o menos').required('Requerido'),
                    lastName: Yup.string().max(15, 'debe tener 15 chars o menos').required('Requerido'),
                    email: Yup.string().email('Must be valid email').required('Required'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar los terms'),
                    jobType: Yup.string().notOneOf(['tu-tia'], 'Esta opcion no es permitida').required('Required')
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput label="First name" name="firstName" type="text" placeholder="juanelo" />
                        <MyTextInput label="Last name" name="lastName" type="text" placeholder="reynoso" />
                        <MyTextInput label="Email" type="email" name="email" placeholder="tuvieja@tuTia.com" />
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something </option>
                            <option value="tu-hermana">Tu hermana </option>
                            <option value="tu-vieja">Tu vieja </option>
                            <option value="tu-tia">Tu tia </option>
                        </MySelect>

                        <MyCheck label="Terms & conditions" name="terms" />

                        <button type='submit'>Submit</button>

                    </Form>
                )
                }
            </Formik>


        </div>
    )
}
