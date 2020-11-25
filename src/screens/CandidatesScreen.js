import React, { useMemo } from 'react';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

export const CandidatesScreen = () => {
	const CANDIDATE_ENDPOINT = 'candidate';

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
			<Button text="Registrar candidato" variantColor="secondary" />
			<Table columns={columns} path={CANDIDATE_ENDPOINT} />
		</div>
	);
};
