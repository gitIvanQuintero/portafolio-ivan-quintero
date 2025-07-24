import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
	const links = [
		{ id: 'about', label: 'Inicio' },
		{ id: 'skills', label: 'Habilidades' },
		{ id: 'experience', label: 'Experiencia' },
		{ id: 'education', label: 'Educación' },
		{ id: 'contact', label: 'Contacto' },
	];

	const [open, setOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(() => {
		const saved = localStorage.getItem('theme');
		return saved === 'dark';
	});

	// Aplica clase al <html> al montar
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4">
					<h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">
						Ivan Quintero | Portafolio
					</h1>

					{/* Menú hamburguesa móvil */}
					<div className="md:hidden">
						{/* Botón modo oscuro en menú móvil */}
						<button
							onClick={toggleTheme}
							className="text-xl text-slate-700 dark:text-yellow-300 mr-4 md:mr-0"
							aria-label="Toggle Dark Mode"
						>
							{darkMode ? <FaSun /> : <FaMoon />}
						</button>
						<button onClick={() => setOpen(!open)} className="text-2xl text-slate-700 dark:text-slate-200">
							{open ? <FaTimes /> : <FaBars />}
						</button>
					</div>

					{/* Menú escritorio */}
					<div className="hidden md:flex space-x-6 items-center">
						{/* Botón modo oscuro */}
						<button
							onClick={toggleTheme}
							className="text-xl text-slate-700 dark:text-yellow-300 mr-4 md:mr-0"
							aria-label="Toggle Dark Mode"
						>
							{darkMode ? <FaSun /> : <FaMoon />}
						</button>
						{links.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 font-medium transition duration-300"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				{/* Menú móvil */}
				{open && (
					<div className="md:hidden flex flex-col items-center space-y-4 pb-4">
						{links.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								onClick={() => setOpen(false)}
								className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 font-medium transition duration-300"
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
