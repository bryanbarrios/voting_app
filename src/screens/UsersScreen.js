import React, { useMemo } from 'react';
import { Button } from '../components/Button';
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
			<h1 className='font-semibold text-xl text-gray-800'>Gestión de Usuarios</h1>
			<Button text="Registrar usuario" variantColor='secondary' />
			<Table columns={columns} path={USER_ENDPOINT} />
		</div>
	);
};
