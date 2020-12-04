import React, { useMemo } from 'react'
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

export const PoliticalPartiesScreen = () => {
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
			}
		],
		[]
	);
	
	return (
		<div>
			<Title text="Gestión de Partidos Políticos" />
			<Button text="Registrar partido político" variantColor="secondary" />
			<Table columns={columns} path={POLITICAL_PARTY_ENDPOINT} />
		</div>
	);
}
