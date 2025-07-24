import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const links = [
		{ id: 'about', label: 'Inicio' },
		{ id: 'skills', label: 'Habilidades' },
		{ id: 'experience', label: 'Experiencia' },
		{ id: 'education', label: 'Educación' },
		{ id: 'contact', label: 'Contacto' },
	];
	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4">
					{/* Logo o nombre si lo deseas */}
					<h1 className="text-xl font-bold text-slate-800">Ivan Quintero | Portafolio</h1>

					{/* Botón hamburguesa solo en móviles */}
					<div className="md:hidden">
						<button onClick={() => setOpen(!open)} className="text-2xl text-slate-700">
							{open ? <FaTimes /> : <FaBars />}
						</button>
					</div>

					{/* Menú en escritorio */}
					<div className="hidden md:flex space-x-6">
						{links.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								className="text-slate-700 hover:text-emerald-600 font-medium transition duration-300"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				{/* Menú móvil desplegable */}
				{open && (
					<div className="md:hidden flex flex-col items-center space-y-4 pb-4">
						{links.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								onClick={() => setOpen(false)}
								className="text-slate-700 hover:text-emerald-600 font-medium transition duration-300"
							>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
