import React from 'react';
import { FaLaptopCode, FaNetworkWired, FaCode, FaHome, FaMicrochip } from 'react-icons/fa';
import useInViewDirection from '../hooks/useInViewDirection';

const experienceData = [
	{
		id: 1,
		icon: <FaCode className="text-xl text-white" />,
		title: 'Desarrollador FullStack',
		company: 'RST Asociados',
		period: 'Julio 2024 - Actualidad',
		description:
			'Desarrollo Full Stack con Vue.js y Laravel. Integración de Web Services y automatización de procesos mediante bots para WhatsApp Business. Administración de bases de datos MySQL y SQL Server. Despliegue de aplicaciones en servidores Linux y Windows. Gestión de dominios y servicios de hosting.',
	},
	{
		id: 2,
		icon: <FaLaptopCode className="text-xl text-white" />,
		title: 'Desarrollador Junior',
		company: 'Accedo Digital',
		period: 'Abril 2022 - Julio 2024',
		description:
			'Desarrollo web con Angular, Vue.js, Laravel y C#. Maquetación responsive con CSS y Bootstrap. Diseño y personalización de sitios WordPress. Administración de bases de datos SQL Server y MySQL. Participación en todas las etapas del ciclo de desarrollo: análisis, implementación y soporte técnico.',
	},
	{
		id: 3,
		icon: <FaHome className="text-xl text-white" />,
		title: 'Técnico Especializado en Hogar Digital',
		company: 'Colvatel (ETB)',
		period: 'Diciembre 2021 - Abril 2022',
		description:
			'Instalación y configuración de dispositivos IoT en entornos residenciales. Verificación técnica de servicios sobre redes de fibra óptica. Capacitación personalizada a usuarios finales para optimizar el uso y la experiencia con los dispositivos implementados.',
	},
	{
		id: 4,
		icon: <FaNetworkWired className="text-xl text-white" />,
		title: 'Practicante de Ingeniería en Telecomunicaciones',
		company: 'Comware',
		period: 'Mayo 2021 - Noviembre 2021',
		description:
			'Desarrollo de aplicaciones con C# .NET y SQL Server. Administración de bases de datos y configuración de redes LAN y VPN. Soporte técnico a usuarios, tanto presencial como de forma remota, asegurando continuidad operativa.',
	},
	{
		id: 5,
		icon: <FaMicrochip className="text-xl text-white" />,
		title: 'Tecnólogo en Electrónica',
		company: 'Taox sas',
		period: 'Noviembre 2017 - Enero 2021',
		description:
			'Instalación y mantenimiento de sistemas de automatización industrial. Programación de PLC y tableros electrónicos. Implementación de cableado estructurado y equipos de monitoreo para plantas de tratamiento de agua. Supervisión de procesos y aseguramiento de su correcto funcionamiento.',
	},
];

const Experience = () => {
	const [ref, getAnimation] = useInViewDirection();

	return (
		<section
			id="experience"
			ref={ref}
			className="px-6 flex items-center justify-center pt-16"
		>
			<div className={`max-w-4xl w-full transform transition-all duration-1000 ease-out ${getAnimation('right')}`}>
				{/* Título */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-slate-900 dark:text-white relative inline-block mb-4">
						<span className="relative z-10">Experiencia Profesional</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-lg">
						Trayectoria laboral en tecnología, desarrollo y sistemas.
					</p>
				</div>

				{/* Timeline vertical */}
				<div className="relative border-l-4 border-[#4b8673]/30 dark:border-[#4b8673]/50 pl-6 space-y-10">
					{experienceData.map((exp) => (
						<div
							key={exp.id}
							className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 group transition-all hover:bg-[#e3f1ec] dark:hover:bg-[#2d423c]"
						>
							{/* Icono flotante */}
							<div className="absolute -left-8 top-6 bg-[#4b8673] p-3 rounded-full shadow-md animate-wobble-icon-horizontal">
								{exp.icon}
							</div>

							<h3 className="text-xl font-bold text-[#4b8673] dark:text-green-600">{exp.title}</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{exp.company} • {exp.period}
							</p>
							<p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
								{exp.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
