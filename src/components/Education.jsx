import React, { useState } from 'react';
import {
	FaUniversity,
	FaProjectDiagram,
	FaShieldAlt,
	FaCode,
	FaNetworkWired,
	FaMicrochip,
	FaGraduationCap
} from 'react-icons/fa';
import useInViewDirection from '../hooks/useInViewDirection';

const educationData = [
	{
		id: 1,
		background: '/assets/backgrounds/Especialización_en_Desarrollo_de_Software.jpg',
		icon: <FaUniversity className="text-xl text-[#4b8673]" />,
		title: 'Especialización en Desarrollo de Software',
		subtitle: 'Uniminuto',
		period: 'Cursando',
		description: 'Formación orientada a adquirir herramientas avanzadas y dominar técnicas confiables que garanticen la seguridad de la información en entornos organizacionales. El programa tiene como objetivo desarrollar competencias sólidas para diseñar y construir software de alta calidad, alineado con las exigencias del mercado actual y las mejores prácticas de la industria.',
	},
	{
		id: 2,
		background: '/assets/backgrounds/Certificados_Scrum.jpg',
		icon: <FaProjectDiagram className="text-xl text-[#4b8673]" />,
		title: 'Certificados Scrum',
		subtitle: 'CertMind Netherlands',
		period: '2025',
		description: 'Formación integral en metodologías ágiles basada en el marco Scrum. Incluye certificaciones en roles clave como Practicante de Scrum, Fundamentos de Scrum, Scrum Master, Desarrollador Scrum y Scrum Product Owner. Esta capacitación fortalece la capacidad para liderar, colaborar y entregar productos de valor en ciclos iterativos de desarrollo.',
	},
	{
		id: 3,
		background: '/assets/backgrounds/Auditor_Interno_ISO_27001_y_9001.jpg',
		icon: <FaShieldAlt className="text-xl text-[#4b8673]" />,
		title: 'Auditor Interno ISO 27001 y 9001',
		subtitle: 'J.C. Consultores Asociados Ltda',
		period: '2025',
		description: 'Formación especializada en auditoría interna de sistemas de gestión, bajo los estándares internacionales ISO/IEC 27001:2022 (seguridad de la información) e ISO 9001:2015 (gestión de la calidad). Capacitación orientada a la evaluación de cumplimiento, identificación de riesgos, mejora continua y aplicación de buenas prácticas organizacionales dentro de entornos corporativos y tecnológicos.',
	},
	{
		id: 4,
		background: '/assets/backgrounds/Diplomado_FullStack.jpg',
		icon: <FaCode className="text-xl text-[#4b8673]" />,
		title: 'Diplomado FullStack',
		subtitle: 'Egresados Universidad Distrital',
		period: '2022 - 2023',
		description: 'Programa intensivo orientado al desarrollo de aplicaciones web completas, abarcando tanto el frontend como el backend. Incluye formación en tecnologías modernas para la creación de interfaces interactivas, desarrollo de APIs, bases de datos, control de versiones y despliegue en entornos productivos. Enfocado en el aprendizaje práctico y el uso de herramientas actuales del ecosistema Full Stack.',
	},
	{
		id: 5,
		background: '/assets/backgrounds/Ingeniería_en_Telecomunicaciones.jpg',
		icon: <FaNetworkWired className="text-xl text-[#4b8673]" />,
		title: 'Ingeniería en Telecomunicaciones',
		subtitle: 'Universidad Distrital Francisco José de Caldas',
		period: '2019 - 2022',
		description: 'Formación enfocada en el diseño, implementación y optimización de sistemas de telecomunicaciones, redes de datos, infraestructura digital y servicios de conectividad. La carrera integra conocimientos en electrónica, programación, transmisión de señales y ciberseguridad, preparando profesionales capaces de enfrentar los desafíos tecnológicos actuales y desarrollar soluciones innovadoras para la comunicación eficiente, segura y global.',
	},
	{
		id: 6,
		background: '/assets/backgrounds/Tecnología_en_Electrónica.jpg',
		icon: <FaMicrochip className="text-xl text-[#4b8673]" />,
		title: 'Tecnología en Electrónica',
		subtitle: 'Universidad Distrital Francisco José de Caldas',
		period: '2014 - 2019',
		description: 'Programa con enfoque técnico-profesional orientado al diseño, desarrollo y mantenimiento de sistemas electrónicos. Incluye formación sólida en instrumentación, automatización, control industrial, electrónica digital y analógica, así como en el uso de microcontroladores y sistemas embebidos. Prepara tecnólogos capaces de implementar soluciones innovadoras en diversos sectores industriales y tecnológicos.',
	},
	{
		id: 7,
		background: '/assets/backgrounds/Bachillerato.jpg',
		icon: <FaGraduationCap className="text-xl text-[#4b8673]" />,
		title: 'Bachillerato',
		subtitle: 'Colegio Rembrandt',
		period: '2002 - 2013',
		description: 'Formación integral en las áreas fundamentales del conocimiento, incluyendo matemáticas, ciencias naturales, lenguaje, ciencias sociales e informática. Proporciona las bases académicas y habilidades esenciales para la educación superior y el desarrollo personal.',
	}
];

const Education = () => {
	const [selectedId, setSelectedId] = useState(educationData[0].id);
	const [animateKey, setAnimateKey] = useState(0);
	const selected = educationData.find((item) => item.id === selectedId);
	const [ref, getAnimation] = useInViewDirection();

	const handleSelect = (id) => {
		setSelectedId(id);
		setAnimateKey((prev) => prev + 1);
	};

	return (
		<section
			id="education"
			className="px-6 flex items-center justify-center pt-16"
			ref={ref}
		>
			<div
				className={`max-w-7xl w-full flex flex-col gap-12 transform transition-all duration-1000 ease-out ${getAnimation('left')}`}
			>
				{/* Título */}
				<div className="text-center">
					<h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white relative inline-block mb-4">
						<span className="relative z-10">Formación académica</span>
					</h1>
					<p className="text-gray-600 dark:text-gray-300 text-lg">
						Un resumen de mis estudios y certificaciones más relevantes.
					</p>
				</div>

				{/* Contenido */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
					{/* Botones de selección */}
					<div className="flex flex-col gap-4">
						{educationData.map((edu) => (
							<button
								key={edu.id}
								onClick={() => handleSelect(edu.id)}
								className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all border-l-4 ${edu.id === selectedId
									? 'bg-[#86a6a5]/20 border-[#88b9aa] text-slate-900 dark:text-white font-semibold'
									: 'bg-white dark:bg-gray-800 border-transparent text-gray-600 dark:text-gray-300 hover:bg-[#86a6a5]/10 dark:hover:bg-[#86a6a5]/20'
									}`}
							>
								<label className="animate-wobble-icon">{edu.icon}</label>
								{edu.title}
							</button>
						))}
					</div>

					{/* Detalle */}
					<div
						key={animateKey}
						className="md:col-span-2 relative rounded-xl shadow transition-all duration-500 ease-in-out h-full flex flex-col justify-center items-start overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]"
						style={{
							backgroundImage: `url(${selected.background})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<div className="absolute inset-0 bg-black/60 z-0" />
						<div className="relative z-10 p-6">
							<h2 className="text-2xl font-bold text-white mb-1">{selected.title}</h2>
							<p className="text-sm text-gray-200">{selected.subtitle}</p>
							<p className="text-sm text-gray-300 mb-4">{selected.period}</p>
							<p className="text-gray-100 leading-relaxed">{selected.description}</p>

							{selected.id === 2 && (
								<div className="mt-6 flex flex-wrap gap-4 justify-center">
									<img src="/assets/badges/ScrumPractitioner.svg" alt="Scrum Practitioner" className="w-36 h-36" />
									<img src="/assets/badges/ScrumFundamentals.svg" alt="Scrum Foundation" className="w-36 h-36" />
									<img src="/assets/badges/ScrumMaster.svg" alt="Scrum Master" className="w-36 h-36" />
									<img src="/assets/badges/ScrumDeveloper.svg" alt="Scrum Developer" className="w-36 h-36" />
									<img src="/assets/badges/ScrumProductOwner.svg" alt="Scrum Product Owner" className="w-36 h-36" />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
