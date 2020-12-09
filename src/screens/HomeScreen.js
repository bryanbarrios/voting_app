import React from 'react';
import { withNavbar } from '../components/hoc/withNavbar';

const HomeScreen = () => {
	return (
		<div className="space-y-6">
			<h1 className="text-5xl text-secondary-500 font-bold mb-2">Vote Now</h1>
			<img
				src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20209/5f8f0e412cfac252ec86cccb_In-person+vote/In-person+vote_11c780bd-4fe0-4a84-8a5b-07a0992ef3cb-prv.jpg"
				alt="Art"
				width="80%"
				className="mx-auto"
			/>
			<p className="text-xl text-gray-600 font-medium">
				¡Bienvenido/a! Sabemos el gran impacto que ha tenido el virus del
				COVID-19 alrededor del mundo, y especialmente en nuestro país, es por
				esta razón que, con las elecciones presidenciales cada vez más cerca, se
				ha optado por desarrollar una alternativa con la que se puedan evitar
				las aglomeraciones de personas.
			</p>
			<p className="text-xl text-gray-600 font-medium">
				Vote Now es una herramienta desarrollada para facilitar el proceso de
				votación, permitiendo ejercer tu voto desde la comodidad de tu casa. No
				más filas, no más retrasos, no más salir de casa, simplemente reclama tu
				derecho al voto con un clic.
			</p>
			<h2 className="text-5xl text-blue-500 font-bold text-center">
				¡Vote Now es súper fácil de usar!
			</h2>
			<p className="text-xl text-gray-600 font-medium">
				Tan solo dirígete a la pestaña de elecciones en donde encontraras el
				listado oficial de candidatos disponibles en la elección vigente, luego
				selecciona a tu candidato favorito, y por último confirma tu voto.
				<strong>¡LISTO! ¡HAS EJERCIDO TU DERECHO AL VOTO!</strong>
			</p>
			<h2 className="text-2xl text-blue-500 font-bold">
				Ventajas de utilizar Vote Now
			</h2>
			<ul className="space-y-3">
				<li className="space-y-2">
					<h3 className="text-xl text-blue-500 font-bold">RÁPIDO</h3>
					<p className="text-xl text-gray-600 font-medium">
						Realizar tu voto te tomará menos de 3 minutos desde que inicias
						sesión.
					</p>
				</li>
				<li className="space-y-2">
					<h3 className="text-xl text-blue-500 font-bold">FÁCIL</h3>
					<p className="text-xl text-gray-600 font-medium">
						Vote Now cuenta con una interfaz amigable e intuitiva, perfecta para
						cualquier persona con o sin experiencia en computadoras.
					</p>
				</li>
				<li className="space-y-2">
					<h3 className="text-xl text-blue-500 font-bold">CONFIABLE</h3>
					<p className="text-xl text-gray-600 font-medium">
						No temas, tu información personal y tu voto no podrán ser robados,
						ya que contamos con una verificación de 2 pasos.
					</p>
				</li>
			</ul>
			<img
				src="https://www.cnn.com/interactive/2020/politics/voting-questions-answers/media/20200916-voting-q-a-illustration.jpg"
				alt="Art"
				width="80%"
				className="mx-auto"
			/>
		</div>
	);
};

export default withNavbar(HomeScreen);
