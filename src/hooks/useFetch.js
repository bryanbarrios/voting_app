import useSWR from 'swr';
import { client } from '../utils/api-client';

export const useFetch = (path) => {
	const { data, error } = useSWR(path, client);
	return {
		data,
		isLoading: !error && !data,
		isError: error,
	};
};
