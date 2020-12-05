import React, { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

export const CandidatesScreen = () => {
	const CANDIDATE_ENDPOINT = 'candidate';
	const [isOpen, setIsOpen] = useState(false);

	const columns = useMemo(
		() => [
			{
				Header: 'Id Candidato',
				accessor: 'id',
			},
			{
				Header: 'Primer nombre',
				accessor: 'firstName',
			},
			{
				Header: 'Segundo nombre',
				accessor: 'middleName',
			},
			{
				Header: 'Primer apellido',
				accessor: 'lastName',
			},
			{
				Header: 'Segundo apellido',
				accessor: 'surname',
			},
			{
				Header: 'Partido Político',
				accessor: 'politicalPartyName',
			},
		],
		[]
	);

	return (
		<div>
			<Title text="Gestión de Candidatos" />
			<Button
				onClick={() => setIsOpen(true)}
				text="Registrar candidato"
				variantColor="secondary"
			/>
			<Modal openModal={isOpen} closeModel={() => setIsOpen(false)}>
				<Title text="Registro candidato" />
				<p>Lorem Ipsum.</p>
			</Modal>
			<Table columns={columns} path={CANDIDATE_ENDPOINT} />
		</div>
	);
};
