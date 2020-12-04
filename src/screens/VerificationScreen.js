import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '../components/Button';
import { FormikControl } from '../components/FormikControl';
import { Art } from '../components/art/Art';
import { Note } from '../components/Note';

export const VerificationScreen = () => {
	const initialValues = {
		otp: '',
	};

	const validationSchema = Yup.object({
		otp: Yup.string()
			.required('Requerido')
			.length(6, 'El código de verificación debe contener 6 dígitos'),
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="flex">
			<Art />
			<div className="p-4 md:my-auto md:mx-auto bg-white rounded-lg w-full h-screen md:h-auto md:max-w-md">
				<h1 className="text-2xl font-bold text-secondary-500 self-start mb-4">
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
								text="Verificar"
								variantColor="secondary"
								isBlock={true}
							/>
						</Form>
					)}
				</Formik>
				<Note>
					{
						'El código de verificación será válido durante 3 minutos y tendrá 3 intentos para introducirlo correctamente.'
					}
				</Note>
			</div>
		</div>
	);
};
