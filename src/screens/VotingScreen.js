import React, { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { VotingForm } from '../components/forms/VotingForm';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

export const VotingScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [rowData, setRowData] = useState(null);
	const [isUpdate, setIsUpdate] = useState(false);

	const VOTING_ENDPOINT = 'votation';

	const columns = useMemo(
		() => [
			{
				Header: 'Id de Votación',
				accessor: 'id',
			},
			{
				Header: 'Tipo de votación',
				accessor: 'votationTypeName',
			},
			{
				Header: 'Descripción',
				accessor: 'votationDescription',
			},
			{
				Header: 'Ciudad',
				accessor: 'cityName',
			},
			{
				Header: 'Fecha de apertura',
				accessor: (v) =>
					new Date(v.votationStartDate).toLocaleDateString('es-NI'),
			},
			{
				Header: 'Fecha de cierre',
				accessor: (v) =>
					new Date(v.votationEndDate).toLocaleDateString('es-NI'),
			},
			{
				Header: 'Estado',
				accessor: (v) => (v.votationStatus ? 'Activa' : 'Inactiva'),
			},
		],
		[]
	);

	return (
		<div>
			<Title text="Gestión de Votaciones" />
			<Button
				onClick={() => {
					setIsOpen(true);
					setIsUpdate(false);
					setRowData(null);
				}}
				text="Aperturar votación"
				variantColor="secondary"
			/>
			<Modal openModal={isOpen} closeModel={() => setIsOpen(false)}>
				<VotingForm rowData={rowData} isUpdate={isUpdate} />
			</Modal>
			<Table
				columns={columns}
				path={VOTING_ENDPOINT}
				rowData={setRowData}
				isUpdate={setIsUpdate}
				isOpen={setIsOpen}
			/>
		</div>
	);
};
