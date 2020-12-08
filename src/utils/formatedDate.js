import dayjs from 'dayjs';

export const formateDate = (date) => dayjs(date).format('YYYY-MM-DD');

export const formateDateTime = (date) =>
	dayjs(date).format('DD/MM/YYYY hh:ss a');

export const toLocale = (date, locale) => dayjs(date).locale(locale).toString();
