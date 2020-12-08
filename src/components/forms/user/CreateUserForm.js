import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Button';
import { FormikControl } from '../../FormikControl';
import { Title } from '../../Title';
import { useFetch } from '../../../hooks/useFetch';
import { ErrorNotification } from '../../ErrorNotification';

export const CreateUserForm = () => {
	const USER_ENDPOINT = 'user';

	const { post, isLoading, hasErrors } = useFetch();

	const initialValues = {
		names: '',
		identification: '',
		email: '',
		password: '',
		password_verification: '',
		last_names: '',
		rol_id: 1,
	};

	const validationSchema = Yup.object({
		names: Yup.string().required('Requerido').max(30, 'Máximo 30 caracteres'),
		last_names: Yup.string()
			.required('Requerido')
			.max(30, 'Máximo 30 caracteres'),
		identification: Yup.string()
			.required('Requerido')
			.max(16, 'Máximo 16 caracteres'),
		email: Yup.string()
			.required('Requerido')
			.email('Ingrese un correo electrónico válido')
			.max(50, 'Máximo 50 caracteres'),
		password: Yup.string()
			.required('Requerido')
			.min(8, 'Mínimo 8 caracteres')
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				'Debe contener mayúscula, minúsculas, número y caracter especial'
			),
		password_verification: Yup.string()
			.required('Requerido')
			.min(8, 'Mínimo 8 caracteres')
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				'Debe contener mayúscula, minúsculas, número y caracter especial'
			)
			.oneOf([Yup.ref('password'), null], 'La contraseña no coincide'),
	});

	const onSubmit = ({
		names,
		last_names,
		identification,
		email,
		password,
		rol_id,
	}) => {
		const data = {
			names,
			last_names,
			identification,
			email,
			password,
			rol_id,
		};
		post(USER_ENDPOINT, data);
	};

	return (
		<div>
			<Title text="Nuevo usuario" />
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							control="input"
							type="text"
							label="Nombres"
							name="names"
							placeholder="Ingresa los nombres del usuario"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Apellidos"
							name="last_names"
							placeholder="Ingresa los apellidos del usuario"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Identificación"
							name="identification"
							placeholder="Ingresa la identificación del usuario"
						/>
						<FormikControl
							control="input"
							type="email"
							label="Correo electrónico"
							name="email"
							placeholder="Ingresa el correo electrónico"
						/>
						<FormikControl
							control="input"
							type="password"
							label="Contraseña"
							name="password"
							placeholder="Cree una contraseña"
						/>
						<FormikControl
							control="input"
							type="password"
							label="Verificación de contraseña"
							name="password_verification"
							placeholder="Vuelva a introducir la contraseña"
						/>
						<Button
							type="submit"
							text={isLoading ? 'Cargando...' : 'Registrar'}
							variantColor="secondary"
							isDisable={isLoading}
							isBlock={true}
						/>
					</Form>
				)}
			</Formik>
			{hasErrors !== null &&
				hasErrors.error.map((error, index) => (
					<ErrorNotification key={index}>{error}</ErrorNotification>
				))}
		</div>
	);
};
