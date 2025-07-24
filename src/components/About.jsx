import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import photo from '../assets/images/ivanquinterofoto.png';

const About = () => {
	return (
		<section
			id="about"
			className="w-full min-h-screen flex items-center justify-center px-6 pt-16"
		>
			<div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
				{/* Contenido de texto */}
				<div className="container mx-auto px-6 text-center fade-in-right">
					<h1 className="text-5xl sm:text-6xl lg:text-left font-semibold tracking-tight text-gray-900 dark:text-white">
						<span className="relative inline-block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="249"
								height="22"
								viewBox="0 0 249 22"
								fill="currentColor"
								className="absolute left-0 top-[-0.6em] w-full h-full text-[#b8dacf] dark:text-emerald-700"
							>
								<path d="M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z" />
							</svg>
							<span className="relative text-slate-900 dark:text-gray-300">Construyendo</span>
						</span>{' '}
						soluciones digitales con valor
					</h1>

					<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 lg:text-left">
						Soy Ingeniero en Telecomunicaciones con experiencia en desarrollo de Software FullStack.
						Me enfoco en crear soluciones que optimicen procesos y generen valor.
						Me especializo en productos eficientes y funcionales, con el objetivo de mejorar la experiencia del usuario.
						Me destaco por mantener buenas relaciones con compañeros y clientes, trabajar en equipo con actitud positiva,
						y aportar responsabilidad, pensamiento analítico y compromiso con la mejora continua.
					</p>

					<div className="mt-10 flex justify-between items-center">
						{/* Íconos sociales */}
						<div className="flex gap-6">
							<a
								href="https://co.linkedin.com/in/ivan-quintero-2424a8127"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-2xl animate-wobble-icon"
								aria-label="LinkedIn"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/gitIvanQuintero?tab=repositories"
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-2xl animate-wobble-icon"
								aria-label="GitHub"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.instagram.com/iquinterora/profilecard/?igsh=MXNudTNwMjY3bGVwdg=="
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 text-2xl animate-wobble-icon"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
						</div>

						{/* Botón de WhatsApp */}
						<a
							href="https://wa.me/573222338075?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
							aria-label="Enviar mensaje por WhatsApp"
						>
							<FaWhatsapp className="mr-2 animate-wobble-icon" /> Enviar mensaje
						</a>
					</div>
				</div>

				{/* Imagen */}
				<div className="grid justify-items-center fade-in-up">
					<p className="text-2xl font-gochi text-gray-600 dark:text-gray-300 lg:text-left mb-4 -rotate-12 ms-20 animate-wobble">
						Yo soy Iván Quintero
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="103" height="102" viewBox="0 0 103 102" fill="none" className="-rotate-45 -mb-10 -me-32 -mt-6 z-10 text-gray-600 dark:text-gray-400">
						<path d="M100.676 26.5417C93.9574 46.1137 83.3723 65.5204 62.3048 74.1115C51.0557 78.6989 36.7215 76.3709 36.7673 62.5332C36.7985 53.1087 42.243 38.3844 53.849 37.3949C66.6654 36.3021 46.8111 57.0334 44.2548 58.8791C32.2897 67.5184 20.2216 71.4112 5.76428 74.151C0.348605 75.1774 3.24474 76.5966 6.85897 77.2296C9.99484 77.7788 13.5771 78.3248 16.755 78.0657C17.7243 77.9867 11.502 77.2793 10.5148 77.213C6.28171 76.9284 1.40658 76.4418 2.9682 71.2948C3.21916 70.4678 6.25335 62.9691 7.53037 63.112C8.19484 63.1864 9.21134 68.8129 9.5344 69.5548C11.6329 74.3731 14.1134 76.5032 19.3253 77.6737" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
					<img
						src={photo}
						alt="Foto de Ivan"
						className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-[#b8dacf] dark:border-emerald-700"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
