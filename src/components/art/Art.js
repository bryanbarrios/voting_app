import React from 'react';
import logo from '../../assets/images/logos/art_logo.svg';
import art from '../../assets/images/your_vote_your_voice.svg';
import './art.css';

export const Art = () => {
	return (
		<div className="w-full min-h-screen bg-loginArt p-8 font-art flex-col justify-between art-container hidden md:flex">
			<div>
				<img src={logo} alt="Logo" />
				<h2 className="my-4 font-black text-3xl leading-9 text-fontArt">
					Tu voto, tu voz. Has cumplir tus derechos.
				</h2>
				<img src={art} width="100%" alt="Art" />
			</div>
			<div>
				<p className="font-bold text-sm text-fontArt">
					Art by <u>Jackson Pollock</u>
				</p>
			</div>
		</div>
	);
};
