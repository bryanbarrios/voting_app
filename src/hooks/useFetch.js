import { useCallback, useState } from 'react';
import { useClient } from '../context/verification';

export const useFetch = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [hasErrors, setHasErrors] = useState(null);
	const [response, setResponse] = useState(null);

	const client = useClient();

	const get = useCallback(
		(endpoint) => {
			setIsLoading(true);
			client(endpoint)
				.then((data) => {
					setIsLoading(false);
					setIsSuccess(true);
					setResponse(data);
				})
				.catch(() => {
					setIsLoading(false);
					setIsSuccess(false);
					setHasErrors(true);
				});
		},
		[client]
	);

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
				.catch(() => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(true);
				});
		},
		[client]
	);

	const update = useCallback(
		(endpoint, id, data) => {
			setIsLoading(true);
			console.log(data)
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
				.catch(() => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(true);
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
				.catch(() => {
					setIsSuccess(false);
					setIsLoading(false);
					setHasErrors(true);
				});
		},
		[client]
	);

	return {
		get,
		post,
		update,
		remove,
		isLoading,
		isSuccess,
		hasErrors,
		response,
	};
};
