import React, { useCallback } from 'react';
import { useVerification } from '../../context/verification';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../Button';
import { ErrorNotification } from '../ErrorNotification';

const Card = ({
	candidateName,
	politicalPartyName,
	flagUrl,
	candidateId,
	votingId,
}) => {
	const VOTE_ENDPOINT = 'vote';
	const { post, hasErrors, isLoading } = useFetch();
	const { user } = useVerification();
	const data = {
		candidate_id: candidateId,
		user_id: user?.id,
		votation_id: votingId,
	};

	const registerVote = useCallback(() => {
		post(VOTE_ENDPOINT, data);
	}, [post, data]);

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
					text={
						isLoading ? 'Registrando' : hasErrors !== null ? 'Ya votó' : 'Votar'
					}
					isBlock={true}
					isDisable={isLoading || hasErrors !== null}
					variantColor="secondary"
					size="sm"
					onClick={registerVote}
				/>
			</div>
			{hasErrors !== null &&
				hasErrors.error.map((error, index) => (
					<ErrorNotification key={index}>{error}</ErrorNotification>
				))}
		</div>
	);
};

export default Card;
