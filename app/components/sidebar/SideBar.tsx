"use client";

import { globalMenu, userMenu, categoryMenu, otherMenu } from "@/app/constants";

import MenuGroup from "./MenuGroup";

const SideBar = () => {
	return (
		<div className="flex flex-col gap-4 p-[4px] lg:px-3 lg:w-[240px] overflow-y-auto">
			<MenuGroup items={globalMenu} />
			<div className="hidden lg:flex flex-col gap-4">
				<hr className="border-zinc-600" />
				<MenuGroup items={userMenu} />
				<hr className="border-zinc-600" />
				<MenuGroup items={categoryMenu} title="Explorar" />
				<hr className="border-zinc-600" />
				<MenuGroup items={otherMenu} />
			</div>
		</div>
	);
};

export default SideBar;
