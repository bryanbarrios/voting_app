import React from 'react';
import { Button } from '../Button';

const Card = ({ candidateName, politicalPartyName, flagUrl }) => {
	return (
		<div className="card__container bg-white">
			<div className="card__image__container space-y-2">
				<figure className="card__image_figure">
					<img className="card__image" src={flagUrl} alt="Flag" />
				</figure>
				<figcaption className="card__image__caption">
					{politicalPartyName}
				</figcaption>
			</div>
			<div className="mt-2">
				<h5 className="card__body__label">Candidato</h5>
				<h3 className="card__body__text">{candidateName}</h3>
			</div>
			<div className="mt-4">
				<Button
					text="Votar"
					isBlock={true}
					variantColor="secondary"
					size="sm"
				/>
			</div>
		</div>
	);
};

export default Card;
