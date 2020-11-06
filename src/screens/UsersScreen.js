import React, { useMemo } from 'react';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Title } from '../components/Title';

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
			<Title text="Gestión de Usuarios" />
			<Button text="Registrar usuario" variantColor="secondary" />
			<Table columns={columns} path={USER_ENDPOINT} />
		</div>
	);
};
