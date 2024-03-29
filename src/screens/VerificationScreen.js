import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/images/logos/logo.svg';
import { Button } from '../components/Button';
import { FormikControl } from '../components/FormikControl';
import { Art } from '../components/art/Art';
import { Note } from '../components/Note';
import { useVerification } from '../context/verification';
import { ErrorNotification } from '../components/ErrorNotification';
import { useAuth } from '../context/auth';

export const VerificationScreen = ({ history }) => {
	const { authenticationId } = useAuth();
	const { id, userId } = authenticationId;
	const { isVerified, verification, isLoading, hasErrors } = useVerification();

	const initialValues = {
		otp: '',
	};

	const validationSchema = Yup.object({
		otp: Yup.string()
			.required('Requerido')
			.length(6, 'El código de verificación debe contener 6 dígitos'),
	});

	const onSubmit = ({ otp }) => {
		verification({
			authentication_id: id,
			one_time_password: otp,
			user_id: userId,
		});
	};

	useEffect(() => {
		if (isVerified) {
			history.replace('/');
		}
	}, [isVerified, history]);

	return (
		<div className="flex">
			<Art />
			<div className="p-4 md:my-auto md:mx-auto bg-white rounded-lg w-full h-screen md:h-auto md:max-w-md">
				<img src={logo} alt="Logo" className="md:hidden py-4" />
				<h1 className="text-2xl font-bold text-secondary-500 self-start mt-2 mb-4">
					Código de verificación
				</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{(formik) => (
						<Form>
							<FormikControl
								control="singleOtpInput"
								type="number"
								name="otp"
								placeholder="000000"
							/>
							<Button
								type="submit"
								text={isLoading ? 'Cargando...' : 'Verificar'}
								variantColor="secondary"
								isDisable={isLoading}
								isBlock={true}
							/>
						</Form>
					)}
				</Formik>
				{hasErrors !== null && (
					<ErrorNotification>{hasErrors.error}</ErrorNotification>
				)}
				<Note seconds={5}>
					{
						'El código de verificación será válido durante 3 minutos y tendrá 3 intentos para introducirlo correctamente.'
					}
				</Note>
			</div>
		</div>
	);
};
