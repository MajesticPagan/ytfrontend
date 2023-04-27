"use client";

import { useEffect } from "react";

interface ErrorStateProps {
	error: Error;
	reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	const handleOnClick = () => {
		reset();
	};

	return (
		<div>
			<h3>Oh não!</h3>
			<p>Ocorreu algo de errado, por favor tente aceder a esta página mais tarde.</p>
			<button type="button" onClick={handleOnClick}>
				Tentar novamente
			</button>
		</div>
	);
};

export default Error;
