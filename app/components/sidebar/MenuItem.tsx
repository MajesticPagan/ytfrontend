"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuItemProps } from "@/app/constants";

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, to, hidden }) => {
	const pathname = usePathname();

	const active = useMemo(() => pathname === to, [pathname, to]);

	return (
		<Link
			href={to}
			className={`flex flex-col lg:flex-row items-center gap-1 lg:gap-6 p-4 lg:py-2 rounded-lg transition cursor-pointer 
			${active ? "bg-zinc-700 hover:bg-zinc-600" : "hover:bg-zinc-700"}
			${hidden && "hidden lg:hidden"}`}
			title={label}
		>
			<Icon className="text-3xl md:text-[24px]" />
			<span className={`text-xs lg:text-base truncate ${active && "font-semibold"}`}>
				{label}
			</span>
		</Link>
	);
};

export default MenuItem;
