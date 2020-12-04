import { client } from './utils/api-client';

const token = '__auth_token__';
const authentication_id = '__authentication_id__';

async function getToken() {
	return JSON.parse(window.localStorage.getItem(token));
}

async function getAuthenticationId() {
	return JSON.parse(window.localStorage.getItem(authentication_id));
}

function handleTokenResponse(data) {
	window.localStorage.setItem(token, JSON.stringify(data));
	return data;
}

function handleOtpResponse({ id, userId }) {
	if (id === 0 && userId === 0) {
		throw new Error('Credenciales inválidas');
	} else {
		window.localStorage.setItem(
			authentication_id,
			JSON.stringify({ id, userId })
		);
	}
	return { id, userId };
}

function login(data) {
	return client('user/auth', { data }).then(handleOtpResponse);
}

function verification(data) {
	return client('user/answerTfa', { data }).then(handleTokenResponse);
}

async function logout() {
	window.localStorage.removeItem(token);
}

export { getToken, getAuthenticationId, login, verification, logout };
