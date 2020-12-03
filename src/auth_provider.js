import { client } from './utils/api-client';

const token = '__auth_token__';
const authentication_id = '__authentication_id__';

async function getToken() {
	return window.localStorage.getItem(token);
}

async function getAuthenticationId() {
	return window.localStorage.getItem(authentication_id);
}

function handleOtpResponse(data) {
	window.localStorage.setItem(authentication_id, data);
	return data;
}

function otp(data) {
	return client('user/auth', { data }).then(handleOtpResponse);
}

async function logout() {
	window.localStorage.removeItem(token);
}

export { getToken, getAuthenticationId, otp, logout };
