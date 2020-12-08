import React, { useCallback } from 'react';
import { Button } from '../../Button';
import { ErrorNotification } from '../../ErrorNotification';
import { Title } from '../../Title';
import { FormikControl } from '../../FormikControl';
import { useFetch } from '../../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useClient } from '../../../context/verification';

export const CreateVotingForm = () => {
	const client = useClient();
	const { post, isLoading, hasErrors } = useFetch();
	const VOTING_ENDPOINT = 'votation';
	const CITY_ENDPOINT = 'catalog/city';
	const CANDIDATE_ENDPOINT = 'candidate';

	const loadCities = useCallback(
		(inputValue = '', callback) => {
			client(`${CITY_ENDPOINT}?filter=${inputValue}`).then(({ results }) =>
				callback(
					results.map(({ cityId, cityName }) => {
						return { label: cityName, value: cityId };
					})
				)
			);
		},
		[client]
	);

	const loadCandidates = useCallback(
		(inputValue = '', callback) => {
			client(`${CANDIDATE_ENDPOINT}?filter=${inputValue}`).then(({ results }) =>
				callback(
					results.map(
						({
							id,
							firstName,
							middleName,
							lastName,
							surname,
							politicalPartyName,
						}) => {
							return {
								label: `${firstName} ${middleName} ${lastName} ${surname} - ${politicalPartyName}`,
								value: id,
							};
						}
					)
				)
			);
		},
		[client]
	);

	const votingTypes = [
		{ label: 'Alcaldía', value: 1 },
		{ label: 'Presidencial', value: 2 },
	];

	const initialValues = {
		votation_type_id: '',
		votation_description: '',
		votation_start_date: '',
		votation_end_date: '',
		city_id: '',
		candidates: '',
	};

	const today = new Date();
	const currentDate =
		today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	const validationSchema = Yup.object({
		votation_type_id: Yup.object().required('Requerido'),
		votation_description: Yup.string().max('100').required('Requerido'),
		votation_start_date: Yup.date()
			.required('Requerido')
			.min(
				currentDate,
				'La fecha de inicio debe ser igual o posterior que la actual'
			),
		votation_end_date: Yup.date()
			.required('Requerido')
			.when(
				'votation_start_date',
				(votation_start_date, schema) =>
					votation_start_date &&
					schema.min(
						votation_start_date,
						'La fecha de cierre debe ser mayor que la fecha de apertura'
					)
			),
		city_id: Yup.object().required('Requerido'),
		candidates: Yup.array().of(Yup.object()).required('Requerido'),
	});

	const onSubmit = (values) => {
		const data = {
			...values,
			votation_type_id: values.votation_type_id.value,
			city_id: values.city_id.value,
			candidates: values.candidates.map((candidate) => candidate.value),
		};
		post(VOTING_ENDPOINT, data);
	};

	return (
		<div>
			<Title text="Apertura de votación" />
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							control="dropdown"
							label="Tipo de votación"
							name="votation_type_id"
							options={votingTypes}
							onChange={(option) => {
								formik.setFieldValue('votation_type_id', option);
							}}
							value={formik.values.votation_type_id}
							placeholder="Seleccione un tipo de votación"
						/>
						<FormikControl
							control="textarea"
							label="Descripción"
							name="votation_description"
							placeholder="Ingresa una descripción"
						/>
						<FormikControl
							control="input"
							type="datetime-local"
							label="Fecha de apertura"
							name="votation_start_date"
							placeholder="Seleccione una fecha de apertura"
						/>
						<FormikControl
							control="input"
							type="datetime-local"
							label="Fecha de cierre"
							name="votation_end_date"
							placeholder="Seleccione una fecha de cierre"
						/>
						<FormikControl
							control="dropdown"
							label="Ciudad"
							name="city_id"
							isAsync={true}
							loadOptions={loadCities}
							defaultOptions
							menuPlacement="top"
							onChange={(option) => {
								formik.setFieldValue('city_id', option);
							}}
							value={formik.values.city_id}
							placeholder="Seleccione o busque una ciudad"
						/>
						<FormikControl
							control="dropdown"
							label="Candidatos"
							name="candidates"
							isAsync={true}
							isMulti={true}
							loadOptions={loadCandidates}
							defaultOptions
							menuPlacement="top"
							onChange={(option) => {
								formik.setFieldValue('candidates', option);
							}}
							value={formik.values.candidates}
							placeholder="Seleccione o busque candidatos"
						/>
						<Button
							type="submit"
							text={isLoading ? 'Cargando...' : 'Aperturar'}
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
