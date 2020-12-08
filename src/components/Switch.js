import React, { useState } from 'react';
import { useCallback } from 'react';
import StatusSwitch from 'react-switch';
import { useFetch } from '../hooks/useFetch';

export const Switch = ({ path, isChecked, id }) => {
	const [status, setStatus] = useState(isChecked);
	const { updateStatus, isLoading } = useFetch();

	const changeStatus = useCallback(() => {
		updateStatus(path, id, !isChecked);
		setStatus(!status);
	}, [path, id, isChecked, status, updateStatus]);

	return (
		<div>
			<StatusSwitch
				checked={status}
				onChange={changeStatus}
				disabled={isLoading}
				onColor="#4CD864"
				onHandleColor="#fff"
				handleDiameter={20}
				uncheckedIcon={false}
				checkedIcon={false}
				boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
				activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
				height={20}
				width={38}
			/>
		</div>
	);
};
