import React, { useEffect, useState } from 'react';
import { withNavbar } from '../components/hoc/withNavbar';
import { VotingLayout } from '../components/VotingLayout';
import { useClient } from '../context/verification';

const ElectionsScreen = () => {
	const VOTING_ENDPOINT = 'votation';
	const [data, setData] = useState(null);
	const client = useClient();

	useEffect(() => {
		client(VOTING_ENDPOINT).then(({ results }) => setData(results));
	}, [client]);

	return (
		<div>
			<div className="flex flex-row items-center space-x-2">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg"
					width="40px"
					height="40px"
					className="pb-2"
					alt="Flag"
				/>
				<h1 className="text-4xl text-secondary-500 font-bold mb-2">
					Elecciones
				</h1>
			</div>
			<p className="text-xl font-medium text-gray-600 mb-5">
				Antes de votar te recomendamos que pienses muy bien tu decisión. No te
				preocupes, con Vote Now tu voto <strong>SI CUENTA</strong>, y a como la
				ley lo estipula tu voto es <strong>SECRETO</strong>.
			</p>
			<h2 className="text-xl text-secondary-500 font-semibold mb-4">
				Elecciones disponibles
			</h2>
			<div className="space-y-3">
				{data !== null &&
					data.map(
						(data) =>
							data.votationStatus && <VotingLayout key={data.id} data={data} />
					)}
			</div>
		</div>
	);
};

export default withNavbar(ElectionsScreen);
