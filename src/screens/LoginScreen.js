import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Art } from '../components/art/Art';
import { Button } from '../components/Button';
import { FormikControl } from '../components/FormikControl';
import logo from '../assets/images/logos/logo.svg';
import { useAuth } from '../context/auth';
import { EmailNotification } from '../components/EmailNotification';
import Transition from '../components/Transition';
import { ErrorNotification } from '../components/ErrorNotification';

export const LoginScreen = ({ history }) => {
	const { isAuthenticated, login, isLoading, hasErrors } = useAuth();

	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().required('Requerido').email('Ingrese un correo válido'),
		password: Yup.string().required('Requerido'),
	});

	const onSubmit = (values) => {
		login(values);
	};

	useEffect(() => {
		if (isAuthenticated) {
			setTimeout(() => {
				history.push('/verification');
			}, 5000);
		}
	}, [isAuthenticated, history]);

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
								text={isLoading ? 'Cargando...' : 'Iniciar sesión'}
								variantColor="secondary"
								isBlock={true}
								isDisable={isLoading}
							/>
						</Form>
					)}
				</Formik>
				<Transition
					show={isAuthenticated}
					enter="transition ease-out duration-700"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-100"
					leaveFrom="transform opacity-100 scale-300"
					leaveTo="transform opacity-0 scale-95"
				>
					<EmailNotification />
				</Transition>
				<Transition
					show={hasErrors}
					enter="transition ease-out duration-700"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-100"
					leaveFrom="transform opacity-100 scale-300"
					leaveTo="transform opacity-0 scale-95"
				>
					<ErrorNotification />
				</Transition>
			</div>
		</div>
	);
};
