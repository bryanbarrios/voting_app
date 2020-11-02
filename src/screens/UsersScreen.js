import React, { useMemo } from 'react';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { useFetch } from '../hooks/useFetch';

export const UsersScreen = () => {
	const { data, isLoading } = useFetch('users');

	// Ubicación temporal

	/* const columns = useMemo(
		() => [
			{
				Header: 'Id Usuario',
				accesor: 'user_id',
			},
			{
				Header: 'Identificación',
				accesor: 'identification',
			},
			{
				Header: 'Primer nombre',
				accesor: 'first_name',
			},
			{
				Header: 'Segundo nombre',
				accesor: 'middle_name',
			},
			{
				Header: 'Primer apellido',
				accesor: 'last_name',
			},
			{
				Header: 'Segundo apellido',
				accesor: 'surname',
			},
			{
				Header: 'Correo electrónico',
				accesor: 'email',
			},
			{
				Header: 'Estado',
				accesor: 'status',
			},
		],
		[]
	); */

	const columns = useMemo(
		() => [
			{
				Header: 'Id Usuario',
				accessor: 'id',
			},
			{
				Header: 'Nombre',
				accessor: 'name',
			},
			{
				Header: 'Nombre de usuario',
				accessor: 'username',
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
			<h1 className="text-xl font-semibold text-primary-500 py-2">
				Gestión de Usuarios
			</h1>
			<Button text="Registrar usuario" />
			{/** Solo para motivos de visualización */}
			<div className="py-4">
				<input
					placeholder="Buscar usuario"
					className="p-2 rounded-lg shadow text-sm"
				/>
			</div>
			{isLoading ? <p>Cargando...</p> : <Table columns={columns} data={data} />}
		</div>
	);
};
