import React from 'react';
import { formateDateTime } from '../utils/formatedDate';
import Card from './card/Card';

export const VotingLayout = ({ data }) => {
	return (
		<div className="flex flex-col space-y-3 bg-gray-100 p-4 rounded-lg border-blue-500 border-1">
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Tipo de votación:</strong> {data.votationTypeName}
				</span>
			</div>
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Descripción:</strong> {data.votationDescription}
				</span>
			</div>
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						></path>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Ciudad:</strong> {data.cityName}
				</span>
			</div>
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Fecha de apertura:</strong> {formateDateTime(data.startDate)}
				</span>
			</div>
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Fecha de cierre:</strong>{' '}
					{formateDateTime(data.votationEndDate)}
				</span>
			</div>
			<div className="inline-flex items-center space-x-2">
				<span className="text-secondary-500">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</span>
				<span className="text-gray-600">
					<strong>Candidatos disponibles</strong>
				</span>
			</div>
			<div className="flex flex-row">
				{data.candidates.map((candidate) => (
					<Card
						key={candidate.id}
						candidateName={`${candidate.firstName} ${candidate.middleName} ${candidate.lastName} ${candidate.surname}`}
						politicalPartyName={candidate.politicalPartyName}
						flagUrl={candidate.politicalPartyImageUrl}
						votingId={data.id}
						candidateId={candidate.id}
					/>
				))}
			</div>
		</div>
	);
};
