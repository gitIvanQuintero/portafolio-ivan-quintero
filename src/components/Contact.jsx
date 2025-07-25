import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import useInViewDirection from '../hooks/useInViewDirection';
import emailjs from '@emailjs/browser';
import Turnstile from 'react-turnstile';
import { toast } from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SITE_KEY = import.meta.env.VITE_EMAILJS_TURNSTILE_SITE_KEY;
const CONFIRM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID;

const recommendations = [
	{
		name: "Sebastian Vallejo",
		relation: "Amigo y compañero de estudios",
		comment: "Conozco a Ivan desde hace más de 20 años y puedo decir con total confianza que es una persona íntegra, leal y con una calidad humana excepcional. A lo largo de nuestra amistad, siempre ha demostrado ser alguien en quien se puede confiar, con una actitud positiva, un gran sentido del humor y una disposición genuina para ayudar a los demás. Es creativo, apasionado en todo lo que hace y siempre está dispuesto a aportar ideas y soluciones con entusiasmo. Compartir tantos años de amistad con Iván ha sido una experiencia valiosa, y no tengo duda de que quien lo conozca encontrará en él a una persona auténtica, confiable y admirable.",
	},
	{
		name: "Leonardo Beltrán",
		relation: "Lider de equipo de desarrollo",
		comment: "Conozco al señor Ivan desde hace más de 5 años y puedo indicar que es una persona cumplida, comprometida y puede ejercer su trabajo de manera idónea en cualquier rol que se desempeñe, es un profesional apasionado y muy creativo, siempre aporta soluciones efectivas y se comunica con claridad.",
	},
	{
		name: "Wilmer Quintero",
		relation: "Hermano",
		comment: "Iván Quintero, mi hermano, es un profesional proactivo, curioso y altamente inteligente. Se caracteriza por su constante disposición para indagar, resolver problemas y buscar soluciones efectivas. Su enfoque siempre está orientado a la excelencia y la calidad en todo lo que hace.",
	},
	{
		name: "Mario Lopez",
		relation: "Amigo y compañero ciclista",
		comment: "Iván es una persona responsable, con gran capacidad de adaptación al cambio y a entornos colaborativos. Su carácter firme fortalece tanto su desempeño como sus relaciones interpersonales. Se destaca por su creatividad y habilidad para resolver problemas, lo que hace que trabajar con él sea altamente enriquecedor.",
	},
];

const Contact = () => {
	const form = useRef();
	const [token, setToken] = useState(null);
	const [isSending, setIsSending] = useState(false);
	const turnstileRef = useRef(null);
	const [captchaKey, setCaptchaKey] = useState(Date.now());

	const sendEmail = async (e) => {
		e.preventDefault();
		if (!token) {
			toast.error('Por favor, valida el reCAPTCHA antes de enviar');
			return;
		}

		setIsSending(true);

		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
			const { user_email, user_name, message } = form.current;

			try {
				await emailjs.send(SERVICE_ID, CONFIRM_TEMPLATE_ID, {
					user_email: user_email.value,
					user_name: user_name.value,
					message: message.value,
				}, PUBLIC_KEY);
			} catch (error) {
				console.error('Error al enviar confirmación:', error);
			}

			toast.success('Mensaje enviado correctamente');
			e.target.reset();
			setCaptchaKey(Date.now());
			setToken(null);
			turnstileRef.current?.reset();
		} catch (error) {
			console.error('Error al enviar:', error);
			toast.error('Ocurrió un error. Intenta nuevamente');
		} finally {
			setIsSending(false);
		}
	};

	const [ref, getAnimation] = useInViewDirection();

	return (
		<section
			id="contact"
			ref={ref}
			className="px-6 pb-12 flex items-center justify-center pt-16"
		>
			<div className={`max-w-6xl w-full transform transition-all duration-1000 ease-out ${getAnimation('bottom')}`}>
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
						<span className="relative z-10">Contáctame</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-lg">
						¿Tienes un proyecto o deseas colaborar conmigo? Estoy disponible para nuevas oportunidades.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8">
					{/* Información de contacto y formulario */}
					<div className="space-y-10">
						<h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-4">
							Información de contacto
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex items-center gap-4">
								<FaEnvelope className="text-[#4b8673] text-2xl animate-wobble-icon" />
								<p className="text-gray-700 dark:text-gray-300">iquinterora@gmail.com</p>
							</div>
							<div className="flex items-center gap-4">
								<FaPhone className="text-[#4b8673] text-2xl animate-wobble-icon" />
								<p className="text-gray-700 dark:text-gray-300">+57 322 233 8075</p>
							</div>
							<div className="flex items-center gap-4">
								<FaMapMarkerAlt className="text-[#4b8673] text-2xl animate-wobble-icon" />
								<p className="text-gray-700 dark:text-gray-300">Bogotá, Colombia</p>
							</div>
							<a className="flex items-center gap-4" href="https://co.linkedin.com/in/ivan-quintero-2424a8127">
								<FaLinkedin className="text-[#4b8673] text-2xl animate-wobble-icon" />
								<p className="text-gray-700 dark:text-gray-300">Ivan Quintero</p>
							</a>
						</div>

						<form ref={form} onSubmit={sendEmail} className="space-y-6">
							<div>
								<label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
								<input
									type="text"
									name="user_name"
									required
									className="w-full bg-white dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#4b8673]"
									placeholder="Tu nombre"
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Correo</label>
								<input
									type="email"
									name="user_email"
									required
									className="w-full bg-white dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#4b8673]"
									placeholder="Tu correo electrónico"
								/>
							</div>
							<div>
								<label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
								<textarea
									name="message"
									rows="4"
									required
									className="w-full bg-white dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#4b8673]"
									placeholder="Tu mensaje aquí..."
								></textarea>
							</div>

							<Turnstile
								key={captchaKey}
								sitekey={SITE_KEY}
								onVerify={(token) => setToken(token)}
								className="my-4 grid justify-items-center"
							/>

							<div className="flex justify-center">
								<button
									type="submit"
									className={`px-6 py-3 rounded-md font-semibold transition text-white ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4b8673] hover:bg-[#3a6e5d]'
										}`}
									disabled={isSending}
								>
									{isSending ? 'Enviando...' : 'Enviar mensaje'}
								</button>
							</div>
						</form>
					</div>

					{/* Recomendaciones */}
					<div className="flex flex-col justify-between h-full min-h-[500px]">
						<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Recomendaciones</h3>
						<div className="relative overflow-hidden flex-1 min-h-[200px] group">
							<div className="absolute w-full animate-slide-vertical space-y-6 group-hover:[animation-play-state:paused]">
								{recommendations.concat(recommendations).map((rec, index) => (
									<div
										key={index}
										className="bg-[#f9f9f9] dark:bg-slate-700 border border-[#b8dacf]/50 dark:border-slate-600 p-6 rounded-lg shadow-sm mx-2"
									>
										<p className="text-gray-700 dark:text-gray-300 italic mb-3">“{rec.comment}”</p>
										<div className="font-semibold text-gray-800 dark:text-white">{rec.name}</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">{rec.relation}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
