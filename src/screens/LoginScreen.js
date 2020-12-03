import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Art } from '../components/art/Art';
import { Button } from '../components/Button';
import { FormikControl } from '../components/FormikControl';
import logo from '../assets/images/logos/logo.svg';
import { EmailNotification } from '../components/EmailNotification';
import { otp } from '../auth_provider';

export const LoginScreen = () => {
	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().required('Requerido').email('Ingrese un correo válido'),
		password: Yup.string().required('Requerido'),
	});

	const onSubmit = (values) => {
		otp(values);
	};

	return (
		<div className="flex">
			<Art />
			<div className="p-4 md:my-auto md:mx-auto bg-white rounded-lg w-full h-screen md:h-auto md:max-w-sm">
				<img src={logo} alt="Logo" className="md:hidden py-4" />
				<h1 className="text-2xl font-bold text-secondary-500 self-start my-2">
					Iniciar sesión
				</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{(formik) => (
						<Form>
							<FormikControl
								control="input"
								type="email"
								label="Correo electrónico"
								name="email"
								placeholder="Ingresa tu correo electrónico"
							/>
							<FormikControl
								control="input"
								type="password"
								label="Contraseña"
								name="password"
								placeholder="Ingresa tu contraseña"
							/>
							<Button
								type="submit"
								text="Iniciar sesión"
								variantColor="secondary"
								isBlock={true}
							/>
						</Form>
					)}
				</Formik>
				<EmailNotification />
			</div>
		</div>
	);
};
