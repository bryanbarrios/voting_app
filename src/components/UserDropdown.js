import React, { useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';
import Transition from './Transition';
import { DropdownItem } from './DropdownItem';
import { useVerification } from '../context/verification';

const UserDropdown = ({ email, rol, history }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const { logout } = useVerification();

	useEffect(() => {
		const handleClick = (event) => {
			if (
				!event.target.closest(`.${dropdownRef.current.className}`) &&
				isOpen
			) {
				setIsOpen(false);
			}
		};

		let unlisten = history.listen(() => {
			setIsOpen(false);
		});

		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
			unlisten();
		};
	}, [isOpen, history]);

	return (
		<div className="dropdown" ref={dropdownRef}>
			<div className="ml-3 relative">
				<div id="user-menu">
					<button
						className="max-w-xs bg-transparent text-gray-600 p-2 space-x-2 rounded-lg flex items-center text-sm focus:outline-none"
						onClick={() => setIsOpen((isOpen) => !isOpen)}
					>
						<span>{email}</span>
						<span>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className={cx({
										hidden: isOpen,
									})}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								></path>
								<path
									className={cx({
										hidden: !isOpen,
									})}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 15l7-7 7 7"
								></path>
							</svg>
						</span>
					</button>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-500"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-100"
					leaveFrom="transform opacity-100 scale-300"
					leaveTo="transform opacity-0 scale-95"
				>
					<div
						className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu"
					>
						{rol === 'Admin' && (
							<DropdownItem text="Panel de administración" to="/dashboard" />
						)}
						<DropdownItem text="Cerrar sesión" to="/login" action={logout} />
					</div>
				</Transition>
			</div>
		</div>
	);
};

export default withRouter(UserDropdown);
