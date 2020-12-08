import React, { useCallback } from 'react';
import { Button } from '../../Button';
import { ErrorNotification } from '../../ErrorNotification';
import { Title } from '../../Title';
import { FormikControl } from '../../FormikControl';
import { useFetch } from '../../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useClient } from '../../../context/verification';

export const CreateCandidateForm = () => {
	const client = useClient();
	const { post, isLoading, hasErrors } = useFetch();
	const CANDIDATE_ENDPOINT = 'candidate';
	const POLITICAL_PARTY_ENDPOINT = 'political-party';

	const loadPoliticalParties = useCallback(
		(inputValue = '', callback) => {
			client(`${POLITICAL_PARTY_ENDPOINT}?filter=${inputValue}`).then(
				({ results }) =>
					callback(
						results.map(({ id, politicalPartyName }) => {
							return { label: politicalPartyName, value: id };
						})
					)
			);
		},
		[client]
	);

	const initialValues = {
		first_name: '',
		middlename: '',
		last_name: '',
		surnname: '',
		political_party_id: '',
	};

	const validationSchema = Yup.object({
		first_name: Yup.string().required('Requerido'),
		middlename: Yup.string().required('Requerido'),
		last_name: Yup.string().required('Requerido'),
		surnname: Yup.string().required('Requerido'),
		political_party_id: Yup.object().required('Requerido'),
	});

	const onSubmit = (values) => {
		const data = {
			...values,
			political_party_id: values.political_party_id.value,
		};

		post(CANDIDATE_ENDPOINT, data);
	};

	return (
		<div>
			<Title text="Nuevo candidato" />
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
						<FormikControl
							control="dropdown"
							isAsync={true}
							label="Partido político"
							name="political_party_id"
							loadOptions={loadPoliticalParties}
							defaultOptions
							menuPlacement="top"
							onChange={(option) => {
								formik.setFieldValue('political_party_id', option);
							}}
							value={formik.values.political_party_id}
							placeholder="Seleccione o busque un partido político"
						/>
						<Button
							type="submit"
							text={isLoading ? 'Cargando...' : 'Registrar'}
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
