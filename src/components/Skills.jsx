import React from 'react';
import useInView from '../hooks/useInView';
import { Code, Settings, Users, Cpu } from 'lucide-react';

const Skills = () => {
	const [ref, isVisible] = useInView();

	return (
		<section
			id="skills"
			className="w-full flex items-center justify-center px-6 pt-16"
		>
			<div ref={ref}>
				<div
					className={`p-6 w-full mx-auto transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-50'
						}`}
				>
					<div className="w-full max-w-7xl mx-auto transition-all duration-700 fade-in-up">
						<div className="text-center mb-12">
							<h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white relative inline-block mb-4">
								<span className="relative z-10">Habilidades</span>
							</h1>
							<p className="text-gray-600 dark:text-gray-300 text-lg">
								Conocimientos, herramientas y capacidades que aplico para desarrollar y desplegar soluciones tecnológicas de forma eficiente.
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-6">
							{/* Fortalezas personales */}
							<div className="w-full md:w-[48%] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
								<Users className="w-10 h-10 text-green-600 mb-4 animate-wobble-icon" />
								<h3 className="text-sm font-medium text-green-600">Fortalezas personales</h3>
								<p className="mt-2 text-slate-800 dark:text-slate-200">
									Pensamiento analítico<br />
									Aprendizaje continuo<br />
									Colaboración en equipo<br />
									Comunicación efectiva
								</p>
							</div>

							{/* Lenguajes y frameworks */}
							<div className="w-full md:w-[48%] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
								<Code className="w-10 h-10 text-green-600 mb-4 animate-wobble-icon" />
								<h3 className="text-sm font-medium text-green-600">Lenguajes y Frameworks</h3>
								<p className="mt-2 text-slate-800 dark:text-slate-200">
									JavaScript, PHP, C#, SQL<br />
									HTML5, CSS3, Vue.js, Angular, React<br />
									Laravel, .NET, WordPress<br />
									Tailwind, Bootstrap, Docker
								</p>
							</div>

							{/* Infraestructura y herramientas */}
							<div className="w-full md:w-[48%] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
								<Settings className="w-10 h-10 text-green-600 mb-4 animate-wobble-icon" />
								<h3 className="text-sm font-medium text-green-600">Infraestructura y herramientas</h3>
								<p className="mt-2 text-slate-800 dark:text-slate-200">
									MySQL, SQL Server<br />
									Git, GitHub, Apache<br />
									Despliegue en servidores Linux y Windows<br />
									APIs REST y SOAP, Web Services, Bots para WhatsApp
								</p>
							</div>

							{/* Otros conocimientos */}
							<div className="w-full md:w-[48%] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
								<Cpu className="w-10 h-10 text-green-600 mb-4 animate-wobble-icon" />
								<h3 className="text-sm font-medium text-green-600">Conocimientos técnicos adicionales</h3>
								<p className="mt-2 text-slate-800 dark:text-slate-200">
									Gestión de dominios y hosting<br />
									IoT, configuración de VPN<br />
									Programación de PLC
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
