import React from 'react';
import { Button } from '../Button';
import styles from './Card.module.css';
import cx from 'classnames';

const Card = ({
	candidateName,
	politicalPartyName,
	flagUrl,
}) => {
	return (
		<div
			className={cx(
				styles.card,
				'shadow-md p-3 m-4 flex flex-col justify-between rounded-lg hover:shadow-lg transition ease-in duration-200'
			)}
		>
			<div className="flex justify-center space-y-2 flex-wrap flex-row">
				<figure className={styles.card_image_container}>
					<img
						className={cx(styles.card_image, 'rounded-lg')}
						src={flagUrl}
						alt="Presidente"
					/>
				</figure>
				<figcaption className="text-xs text-gray-600 font-medium">
					{politicalPartyName}
				</figcaption>
			</div>
			<div className="mt-2">
				<h5 className="font-semibold text-xs text-black">Candidato</h5>
				<h3 className="font-bold text-xl">{candidateName}</h3>
			</div>
			<div className="mt-4">
				<Button text="Votar" isBlock={true} variantColor="secondary" />
			</div>
		</div>
	);
};

export default Card;
