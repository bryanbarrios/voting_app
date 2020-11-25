import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Button = ({
	variant = 'solid',
	variantColor = 'primary',
	size = 'sm',
	isBlock = false,
	text,
	type = 'button',
	onClick,
	...props
}) => {
	return (
		<button
			className={cx(
				'py-2 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline transition duration-200 ease-in',
				{
					'border-solid border	-2 border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600':
						variant === 'outline' && variantColor === 'primary',
					'border-solid border-2 border-secondary-500 text-secondary-500 hover:border-secondary-600 hover:text-secondary-600':
						variant === 'outline' && variantColor === 'secondary',
					'bg-primary-500 text-white hover:bg-primary-600':
						variant === 'solid' && variantColor === 'primary',
					'bg-secondary-500 text-white hover:bg-secondary-600':
						variant === 'solid' && variantColor === 'secondary',
					'text-xs': size === 'xs',
					'text-sm': size === 'sm',
					'text-base': size === 'base',
					'text-lg': size === 'lg',
					'w-full': isBlock === true,
				}
			)}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(['solid', 'outline', 'link']),
	variantColor: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg']),
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
