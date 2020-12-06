import React from 'react';
import { Button } from '../Button';
import Transition from '../Transition';
import { ErrorNotification } from '../ErrorNotification';
import { Title } from '../Title';
import { FormikControl } from '../FormikControl';
import { useFetch } from '../../hooks/useFetch';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const PoliticalPartyForm = ({ rowData, isUpdate }) => {
	const POLITICAL_PARTY_ENDPOINT = 'political-party';
	const { post, update, isLoading, hasErrors } = useFetch();

	const initialValues = {
		political_party_name: rowData?.politicalPartyName || '',
		political_party_abreviation: rowData?.abreviation || '',
		image_url: rowData?.imageUrl || '',
	};

	const validationSchema = Yup.object({
		political_party_name: Yup.string()
			.required('Requerido')
			.max(40, 'Máximo 40 caracteres'),
		political_party_abreviation: Yup.string()
			.required('Requerido')
			.max(6, 'Máximo 6 caracteres'),
		image_url: Yup.string().required('Requerido').url('Ingrese una URL válida'),
	});

	const onSubmit = (data) => {
		isUpdate
			? update(POLITICAL_PARTY_ENDPOINT, rowData.id, data)
			: post(POLITICAL_PARTY_ENDPOINT, data);
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
							label="Nombre de partido político"
							name="political_party_name"
							placeholder="Ingresa el nombre del partido político"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Abreviatura de partido político"
							name="political_party_abreviation"
							placeholder="Ingresa la abreviatura del partido político"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Bandera de partido político"
							name="image_url"
							placeholder="Ingresa la url de la bandera del partido político"
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
