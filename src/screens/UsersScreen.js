import React, { useMemo } from 'react';
import { Table } from '../components/Table';

export const UsersScreen = () => {
	const USER_ENDPOINT = 'user';

	const columns = useMemo(
		() => [
			{
				Header: 'Id Usuario',
				accessor: 'id',
			},
			{
				Header: 'Identificación',
				accessor: 'identification',
			},
			{
				Header: 'Nombres',
				accessor: 'names',
			},
			{
				Header: 'Apellidos',
				accessor: 'lastNames',
			},
			{
				Header: 'Correo electrónico',
				accessor: 'email',
			},
		],
		[]
	);

	return (
		<div>
			<Table columns={columns} path={USER_ENDPOINT} />
		</div>
	);
};
