import React, { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';
import { Title } from '../components/Title';
import { CreateUserForm } from '../components/forms/user/CreateUserForm';
import { EditUserForm } from '../components/forms/user/EditUserForm';

export const UsersScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [rowData, setRowData] = useState(null);
	const [isUpdate, setIsUpdate] = useState(false);
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
			<Button
				onClick={() => {
					setIsOpen(true);
					setIsUpdate(false);
					setRowData(null);
				}}
				text="Registrar usuario"
				variantColor="secondary"
			/>
			<Modal openModal={isOpen} closeModel={() => setIsOpen(false)}>
				{isUpdate ? <EditUserForm rowData={rowData} /> : <CreateUserForm />}
			</Modal>
			<Table
				columns={columns}
				path={USER_ENDPOINT}
				rowData={setRowData}
				isUpdate={setIsUpdate}
				isOpen={setIsOpen}
			/>
		</div>
	);
};
