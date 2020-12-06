import React, { useEffect, useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';
import { FormikControl } from '../components/FormikControl';
import { useFetch } from '../hooks/useFetch';
import Transition from '../components/Transition';
import { ErrorNotification } from '../components/ErrorNotification';

export const PoliticalPartiesScreen = () => {
	const { post, isLoading, isSuccess, hasErrors } = useFetch();

	const [isOpen, setIsOpen] = useState(false);

	const POLITICAL_PARTY_ENDPOINT = 'political-party';

	const columns = useMemo(
		() => [
			{
				Header: 'Id Partido Político',
				accessor: 'id',
			},
			{
				Header: 'Partido Político',
				accessor: 'politicalPartyName',
			},
			{
				Header: 'Abreviatura',
				accessor: 'abreviation',
			},
			{
				Header: 'URL de imagen',
				accessor: 'imageUrl',
			},
		],
		[]
	);

	const initialValues = {
		political_party_name: '',
		political_party_abreviation: '',
		image_url: '',
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
		post('political-party', data);
	};

	useEffect(() => {
		if (isSuccess) {
			setIsOpen(false);
		}
	}, [isSuccess]);

	return (
		<div>
			<Title text="Gestión de Partidos Políticos" />
			<Button
				onClick={() => setIsOpen(true)}
				text="Registrar partido político"
				variantColor="secondary"
			/>
			<Modal openModal={isOpen} closeModel={() => setIsOpen(false)}>
				<Title text="Registro de partido político" />
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
								text={isLoading ? 'Cargando...' : 'Registrar'}
								variantColor="secondary"
								isBlock={true}
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
			</Modal>
			<Table columns={columns} path={POLITICAL_PARTY_ENDPOINT} />
		</div>
	);
};
