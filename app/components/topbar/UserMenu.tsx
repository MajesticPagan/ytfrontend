"use client";

import { BsBell, BsCameraVideo } from "react-icons/bs";
import Image from "next/image";

const UserMenu = () => {
	return (
		<div className="flex items-center gap-2">
			<button
				type="button"
				className="flex items-center bg-zinc-900 hover:bg-zinc-800 transition p-3 rounded-full"
			>
				<BsBell size={18} />
			</button>
			<button
				type="button"
				className="flex items-center bg-zinc-900 hover:bg-zinc-800 transition p-3 rounded-full"
			>
				<BsCameraVideo size={18} />
			</button>
			<div className="ml-2">
				<Image
					src="/profile.jpg"
					alt="Foto de perfil"
					width={36}
					height={36}
					className="rounded-full cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default UserMenu;
