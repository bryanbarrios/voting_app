import React, { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { PoliticalPartyForm } from '../components/forms/PoliticalPartyForm';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

export const PoliticalPartiesScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [rowData, setRowData] = useState(null);
	const [isUpdate, setIsUpdate] = useState(false);

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

	return (
		<div>
			<Title text="Gestión de Partidos Políticos" />
			<Button
				onClick={() => {
					setIsOpen(true);
					setIsUpdate(false);
					setRowData(null);
				}}
				text="Registrar partido político"
				variantColor="secondary"
			/>
			<Modal openModal={isOpen} closeModel={() => setIsOpen(false)}>
				<PoliticalPartyForm rowData={rowData} isUpdate={isUpdate} />
			</Modal>
			<Table
				columns={columns}
				path={POLITICAL_PARTY_ENDPOINT}
				rowData={setRowData}
				isUpdate={setIsUpdate}
				isOpen={setIsOpen}
			/>
		</div>
	);
};
