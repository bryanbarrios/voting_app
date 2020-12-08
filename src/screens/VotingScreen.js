import React, { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { VotingForm } from '../components/forms/VotingForm';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';
import { formateDate } from '../utils/formatedDate';

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
				accessor: (v) => formateDate(v.votationStartDate),
			},
			{
				Header: 'Fecha de cierre',
				accessor: (v) => formateDate(v.votationEndDate),
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
