import { ErrorMessage, useField } from "formik"
import '../styles/styles.css'

interface Props {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input margenes" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
