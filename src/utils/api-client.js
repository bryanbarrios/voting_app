import { logout } from '../auth-provider';

const apiURL = process.env.REACT_APP_API_URL;

async function client(
	endpoint,
	{ data, token, headers: customHeaders, ...customConfig } = {}
) {
	const config = {
		method: data ? 'POST' : 'GET',
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			Authorization: token ? `Bearer ${token}` : undefined,
			'Content-Type': data ? 'application/json' : undefined,
			...customHeaders,
		},
		...customConfig,
	};

	return window
		.fetch(`${apiURL}/${endpoint}`, config)
		.then(async (response) => {
			if (response.status === 401) {
				await logout();
				return Promise.reject({
					error: 'Por favor, inicie sesión nuevamente.',
				});
			}
			if (response.status === 404) {
				return Promise.reject({
					error: 'No encontrado.',
				});
			}
			const data = await response.json();
			if (response.ok) {
				return data;
			} else {
				return Promise.reject(data);
			}
		})
		.catch(({ error }) => {
			console.log(error);
			return Promise.reject({
				error: error,
			});
		});
}

export { client };
