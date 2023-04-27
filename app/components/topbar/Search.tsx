"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsMicFill } from "react-icons/bs";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleOnChange =(event: { target: HTMLInputElement }) => {
		setSearchTerm(() => event.target.value);
	};

	return (
		<div className="hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
			<form className="flex w-full" onSubmit={handleOnSubmit}>
				<input
					placeholder="Pesquisar"
					className="w-full px-4 py-2 bg-zinc-900 transition border-[1px] border-zinc-700 placeholder:text-zinc-400 rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500"
					value={searchTerm}
					onChange={handleOnChange}
				/>
				<button
					type="submit"
					className="bg-zinc-800 hover:bg-zinc-700 transition rounded-tr-full rounded-br-full px-5 py-1 border-[1px] border-l-0 border-zinc-700"
				>
					<BiSearch className="fill-zinc-200" size={22} />
				</button>
			</form>
			<button type="button" className="flex items-center bg-zinc-800 hover:bg-zinc-700 transition py-3 px-[13px] rounded-full">
				<BsMicFill />
			</button>
		</div>
	);
};

export default Search;
