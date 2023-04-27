"use client";

import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { BsYoutube } from "react-icons/bs";

const LogoNav = () => {
	return (
		<div className="flex items-center gap-3 sm:gap-6">
			<HiOutlineMenu size={26} />
			<Link href="/" className="flex gap-1">
				<BsYoutube size={30} className="fill-red-600" />
				<span className="hidden sm:block text-xl font-bold tracking-tighter -mt-[2px]">
					YouTube
				</span>
			</Link>
		</div>
	);
};

export default LogoNav;
