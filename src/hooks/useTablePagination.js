import useSWR from "swr";
import { client } from "../utils/api-client";

export const useTablePagination = (path, pageIndex = 1, pageSize = 15) => {
	const { data, error } = useSWR(
		`${path}?page=${pageIndex}&records=${pageSize}`,
		client
	);
	console.log(`${path}?page=${pageIndex}&records=${pageSize}`)
	return {
		response: data	,
		isLoading: !error && !data,
		isError: error,
	};
};
