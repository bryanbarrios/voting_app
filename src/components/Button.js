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
	hidden = false,
	isDisable,
	onClick,
	...props
}) => {
	return (
		<button
			disabled={isDisable}
			className={cx(
				'my-4 px-4 rounded-md font-semibold focus:outline-none focus:shadow-outline transition duration-200 ease-in',
				{
					'border-solid border	-2 border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600':
						variant === 'outline' && variantColor === 'primary',
					'border-solid border-2 border-secondary-500 text-secondary-500 hover:border-secondary-600 hover:text-secondary-600':
						variant === 'outline' && variantColor === 'secondary',
					'bg-primary-500 text-white hover:bg-primary-600':
						variant === 'solid' && variantColor === 'primary',
					'bg-secondary-500 text-white hover:bg-secondary-600':
						variant === 'solid' && variantColor === 'secondary',
					'bg-red-500 text-white hover:bg-red-600':
						variant === 'solid' && variantColor === 'danger',
					'text-xs py-1': size === 'xs',
					'text-sm py-2': size === 'sm',
					'text-base py-2': size === 'base',
					'text-lg py-2': size === 'lg',
					'w-full': isBlock === true,
					hidden: hidden === true,
					'bg-gray-600': isDisable === true,
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
	variantColor: PropTypes.oneOf(['primary', 'secondary', 'danger']),
	size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg']),
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
