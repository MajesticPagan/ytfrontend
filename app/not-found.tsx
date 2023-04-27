"use client";

import Link from "next/link";

const NotFound = () => {
	return (
		<div className="text-center">
			<h3 className="font-bold text-3xl">Oh não!</h3>
			<p>Parece que a página que está a tentar aceder, foi removida ou não existe.</p>
			<Link href="/">Ir para a página inicial</Link>
		</div>
	);
};

export default NotFound;
