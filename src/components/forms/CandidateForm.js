import React from 'react';
import { Button } from '../Button';
import Transition from '../Transition';
import { ErrorNotification } from '../ErrorNotification';
import { Title } from '../Title';
import { FormikControl } from '../FormikControl';
import { useFetch } from '../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const CandidateForm = ({ rowData, isUpdate }) => {
	const CANDIDATE_ENDPOINT = 'candidate';
	const POLITICAL_PARTY_ENDPOINT = 'political-party';
	const { post, update, isLoading, hasErrors } = useFetch();

	const initialValues = {
		first_name: rowData?.firstName || '',
		middlename: rowData?.middlenName || '',
		last_name: rowData?.lastName || '',
		surname: rowData?.surname || '',
		political_party_id: rowData?.politicalPartyId,
	};

	const validationSchema = Yup.object({
		first_name: Yup.string().required('Requerido'),
		middlename: Yup.string().required('Requerido'),
		last_name: Yup.string().required('Requerido'),
		surname: Yup.string().required('Requerido'),
		political_party_id: Yup.number().required('Requerido'),
	});

	const onSubmit = (data) => {
		isUpdate
			? update(CANDIDATE_ENDPOINT, rowData.id, data)
			: post(CANDIDATE_ENDPOINT, data);
	};

	return (
		<div>
			<Title
				text={isUpdate ? 'Editar partido político' : 'Nuevo partido político'}
			/>
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
							name="surname"
							placeholder="Ingresa el segundo apellido"
						/>
						<Button
							type="submit"
							text={
								isLoading ? 'Cargando...' : isUpdate ? 'Editar' : 'Registrar'
							}
							variantColor="secondary"
							isBlock={true}
							isDisable={isLoading}
						/>
					</Form>
				)}
			</Formik>
			<Transition
				show={hasErrors}
				enter="transition ease-out duration-700"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-100"
				leaveFrom="transform opacity-100 scale-300"
				leaveTo="transform opacity-0 scale-95"
			>
				<ErrorNotification>
					{
						'Ha ocurrido un error, verifique los datos introducidos e inténtelo nuevamente.'
					}
				</ErrorNotification>
			</Transition>
		</div>
	);
};
