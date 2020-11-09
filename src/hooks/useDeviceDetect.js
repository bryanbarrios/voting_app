import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const mobile =
			Math.min(window.screen.width, window.screen.height) < 768 ||
			navigator.userAgent.indexOf('Mobi') > -1;

		setMobile(mobile);
	}, []);

	return { isMobile };
};
