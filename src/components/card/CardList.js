import React from 'react';
import {data} from '../../data/votationDb';
import Card from './Card';

const CardList = () => {
	return (
		<div className="my-4 flex flex-row flex-wrap">
			{data.map((data) => (
				<Card key={data.id} candidateName={data.candidateName} politicalPartyName={data.politicalParty} flagUrl={data.politicalPartyFlagUrl} />
			))}
		</div>
	);
};

export default CardList;
