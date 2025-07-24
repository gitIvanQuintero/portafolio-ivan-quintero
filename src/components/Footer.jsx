import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-white dark:bg-slate-800 shadow-md py-6 w-full text-center">
			<p className="text-sm text-gray-500 dark:text-gray-400">
				© {year} Iván Quintero. Todos los derechos reservados.
			</p>
		</footer>
	);
};

export default Footer;
