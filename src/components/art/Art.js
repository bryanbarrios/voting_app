import React from 'react';
import logo from '../../assets/images/logos/art_logo.svg';
import art from '../../assets/images/your_vote_your_voice.svg';
import './art.css';

export const Art = () => {
	return (
		<div className="w-full min-h-screen bg-login-art p-8 text-foreground-art flex-col justify-between art-container hidden md:flex">
			<div>
				<img src={logo} alt="Logo" />
				<h2 className="my-2 font-black text-3xl leading-9">
					Tu voto, tu voz. Has cumplir tus derechos.
				</h2>
				<h4 className="font-medium">¡Vota ahora mismo!</h4>
				<img src={art} className="w-full" alt="Art" />
			</div>
			<div>
				<p className="font-bold text-sm text-fontArt">	
					Art by <u>Jackson Pollock</u>
				</p>
			</div>
		</div>
	);
};
