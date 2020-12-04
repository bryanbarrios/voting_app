import { client } from './utils/api-client';

const TOKEN_KEY = '__auth_token__';
const AUTHENTICATION_KEY = '__authentication_id__';

function getToken() {
	return window.localStorage.getItem(TOKEN_KEY);
}

function getAuthenticationId() {
	return JSON.parse(window.localStorage.getItem(AUTHENTICATION_KEY));
}

function removeAuthenticationId() {
	window.localStorage.removeItem(AUTHENTICATION_KEY);
}

function handleTokenResponse(data) {
	const { token, attempts, validated } = data;

	if (attempts === 0) {
		removeAuthenticationId();
		window.location.assign(window.location);
		throw new Error('Ha superado la cantidad máxima de intentos permitidos.');
	}

	if (validated === false) {
		throw new Error('Ingrese el código de verificación correctamente.');
	}

	window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
	return data;
}

function handleOtpResponse(data) {
	const { id, userId } = data;
	if (id === 0 && userId === 0) {
		throw new Error('Credenciales inválidas');
	} else {
		window.localStorage.setItem(AUTHENTICATION_KEY, JSON.stringify(data));
	}
	return data;
}

function login(data) {
	return client('user/auth', { data }).then(handleOtpResponse);
}

function verification(data) {
	return client('user/answerTfa', { data }).then(handleTokenResponse);
}

async function logout() {
	window.localStorage.removeItem(TOKEN_KEY);
}

export {
	getToken,
	getAuthenticationId,
	removeAuthenticationId,
	login,
	verification,
	logout,
};
