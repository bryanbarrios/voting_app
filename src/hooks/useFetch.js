import useSWR from 'swr';
import { useClient } from '../context/verification';

export const useFetch = (path) => {
	const client = useClient();
	const { data, error } = useSWR(path, client);
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	};
};
