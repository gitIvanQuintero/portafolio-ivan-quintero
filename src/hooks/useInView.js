import { useEffect, useState, useRef } from 'react';

export default function useInView(options = {}) {
	const ref = useRef(null);
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(ref.current); // solo una vez
				}
			},
			{ threshold: 0.3, ...options }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [ref, options]);

	return [ref, isVisible];
}