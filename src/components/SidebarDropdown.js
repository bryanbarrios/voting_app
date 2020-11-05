import React, { useState, useEffect, useRef } from 'react';
import { SidebarDropdownItem } from './SidebarDropdownItem';
import cx from 'classnames';
import Transition from './Transition';

export const SidebarDropdown = ({ text, items = [], children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClick = (event) => {
			if (
				!event.target.closest(`.${dropdownRef.current.className}`) &&
				isOpen
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [isOpen]);

	return (
		<>
			<div className="dropdown" ref={dropdownRef}>
				<button
					className="duration-200 ease-in w-full inline-flex items-center justify-between whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600 appearance-none focus:outline-none"
					onClick={() => setIsOpen((isOpen) => !isOpen)}
				>
					<div className="inline-flex items-center">
						<span>{children}</span>
						<span className="mx-2">{text}</span>
					</div>
					<div>
						<span>
							<svg
								className="w-6 h-6"
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
					</div>
				</button>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-300"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-100"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<div className="my-1 w-full bg-white shadow-md rounded-lg">
						{items.length !== 0 &&
							items.map((item) => (
								<SidebarDropdownItem
									key={item.key}
									text={item.text}
									to={item.to}
								/>
							))}
					</div>
				</Transition>
			</div>
		</>
	);
};
