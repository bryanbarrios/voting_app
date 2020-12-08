import React from 'react';
import { Button } from '../../Button';
import { ErrorNotification } from '../../ErrorNotification';
import { Title } from '../../Title';
import { FormikControl } from '../../FormikControl';
import { useFetch } from '../../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const EditCandidateForm = ({ rowData }) => {
	const { update, isLoading, hasErrors } = useFetch();
	const CANDIDATE_ENDPOINT = 'candidate';

	const initialValues = {
		first_name: rowData?.firstName || '',
		middlename: rowData?.middleName || '',
		last_name: rowData?.lastName || '',
		surnname: rowData?.surname || '',
	};

	const validationSchema = Yup.object({
		first_name: Yup.string().required('Requerido'),
		middlename: Yup.string().required('Requerido'),
		last_name: Yup.string().required('Requerido'),
		surnname: Yup.string().required('Requerido'),
	});

	const onSubmit = ({ first_name, middlename, last_name, surnname }) => {
		const data = { first_name, middlename, last_name, surnname };
		update(CANDIDATE_ENDPOINT, rowData.id, data);
	};

	return (
		<div>
			<Title text="Editar candidato" />
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
							label="Primer nombre"
							name="first_name"
							placeholder="Ingresa el primer nombre"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Segundo nombre"
							name="middlename"
							placeholder="Ingresa el segundo nombre"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Primer apellido"
							name="last_name"
							placeholder="Ingresa el primer apellido"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Segundo apellido"
							name="surnname"
							placeholder="Ingresa el segundo apellido"
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
		</div>
	);
};
