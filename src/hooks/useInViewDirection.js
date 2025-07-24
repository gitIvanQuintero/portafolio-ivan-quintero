// useInViewDirection.js
import { useEffect, useState, useRef } from 'react';

export default function useInViewDirection(options = {}) {
	const ref = useRef(null);
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(ref.current);
				}
			},
			{ threshold: 0.3, ...options }
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, options]);

	// Devuelve también clases listas para aplicar
	const getAnimationClasses = (direction = 'up') => {
		switch (direction) {
			case 'left':
				return isVisible
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-[-50px]';
			case 'right':
				return isVisible
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-[50px]';
			case 'up':
			default:
				return isVisible
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-10';
		}
	};

	return [ref, getAnimationClasses];
}
