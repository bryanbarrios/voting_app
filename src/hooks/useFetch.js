import { useCallback, useState } from 'react';
import { useClient } from '../context/verification';

export const useFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [hasErrors, setHasErrors] = useState(null);
	const [response, setResponse] = useState(null);

	const client = useClient();

	const post = useCallback(
		(endpoint, data) => {
			setIsLoading(true);
			client(endpoint, { data })
				.then((response) => {
					setIsSuccess(true);
					setIsLoading(false);
					setResponse(response);
					window.location.assign(window.location);
				})
				.catch((error) => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(error);
				});
		},
		[client]
	);

	const update = useCallback(
		(endpoint, id, data) => {
			setIsLoading(true);
			client(`${endpoint}/${id}`, {
				method: 'PUT',
				data,
			})
				.then((response) => {
					setIsSuccess(true);
					setIsLoading(false);
					setResponse(response);
					window.location.assign(window.location);
				})
				.catch((error) => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(error);
				});
		},
		[client]
	);

	const updateStatus = useCallback(
		(endpoint, id, status, data) => {
			setIsLoading(true);
			client(`${endpoint}/${id}/status/${status}`, {
				method: 'PUT',
				data,
			})
				.then((response) => {
					setIsSuccess(true);
					setIsLoading(false);
					setResponse(response);
					window.location.assign(window.location);
				})
				.catch((error) => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(error);
				});
		},
		[client]
	);

	const updateWithoutParameter = useCallback(
		(endpoint, data) => {
			setIsLoading(true);
			client(endpoint, {
				method: 'PUT',
				data,
			})
				.then((response) => {
					setIsSuccess(true);
					setIsLoading(false);
					setResponse(response);
					window.location.assign(window.location);
				})
				.catch((error) => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(error);
				});
		},
		[client]
	);

	const remove = useCallback(
		(endpoint, data) => {
			setIsLoading(true);
			client(endpoint, {
				method: 'DELETE',
				data,
			})
				.then((response) => {
					setIsSuccess(true);
					setIsLoading(false);
					setResponse(response);
					window.location.assign(window.location);
				})
				.catch((error) => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(error);
				});
		},
		[client]
	);

	return {
		post,
		update,
		updateWithoutParameter,
		updateStatus,
		remove,
		isLoading,
		isSuccess,
		hasErrors,
		response,
	};
};
