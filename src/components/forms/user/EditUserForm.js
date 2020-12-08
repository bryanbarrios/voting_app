import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Button';
import { FormikControl } from '../../FormikControl';
import { Title } from '../../Title';
import { useFetch } from '../../../hooks/useFetch';
import { ErrorNotification } from '../../ErrorNotification';

export const EditUserForm = ({ rowData }) => {
	const USER_ENDPOINT = 'user';

	const { update, isLoading, hasErrors } = useFetch();

	const initialValues = {
		names: rowData?.names,
		last_names: rowData?.lastNames,
		email: rowData?.email,
	};

	const validationSchema = Yup.object({
		names: Yup.string().required('Requerido').max(30, 'Máximo 30 caracteres'),
		last_names: Yup.string()
			.required('Requerido')
			.max(30, 'Máximo 30 caracteres'),
		email: Yup.string()
			.required('Requerido')
			.email('Ingrese un correo electrónico válido')
			.max(50, 'Máximo 50 caracteres'),
	});

	const onSubmit = ({ names, last_names, email }) => {
		const data = {
			names,
			last_names,
			email,
		};
		update(USER_ENDPOINT, rowData?.id, data);
	};

	return (
		<>
			<Title text="Editar usuario" />
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
							type="email"
							label="Correo electrónico"
							name="email"
							placeholder="Ingresa el correo electrónico"
						/>
						<Button
							type="submit"
							text={isLoading ? 'Cargando...' : 'Editar'}
							variantColor="secondary"
							isBlock={true}
							isDisable={isLoading}
						/>
					</Form>
				)}
			</Formik>
			{hasErrors !== null &&
				hasErrors.error.map((error, index) => (
					<ErrorNotification key={index}>{error}</ErrorNotification>
				))}
		</>
	);
};
