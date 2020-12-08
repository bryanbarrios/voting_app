import React from 'react';
import { Button } from '../../Button';
import { ErrorNotification } from '../../ErrorNotification';
import { Title } from '../../Title';
import { FormikControl } from '../../FormikControl';
import { useFetch } from '../../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const EditVotingForm = ({ rowData }) => {
	const { updateWithoutParameter, isLoading, hasErrors } = useFetch();
	const VOTING_ENDPOINT = 'votation';

	const initialValues = {
		votation_description: rowData?.votationDescription || '',
	};

	const validationSchema = Yup.object({
		votation_description: Yup.string().max('100').required('Requerido'),
	});

	const onSubmit = ({ votation_description }) => {
		const data = {
			votation_description,
			votation_id: rowData.id,
		};
		updateWithoutParameter(VOTING_ENDPOINT, data);
	};

	return (
		<div>
			<Title text="Edición de votación" />
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							control="textarea"
							label="Descripción"
							name="votation_description"
							placeholder="Ingresa una descripción"
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
		</div>
	);
};
