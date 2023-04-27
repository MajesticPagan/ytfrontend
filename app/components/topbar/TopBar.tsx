"use client";

import LogoNav from "./LogoNav";
import Search from "./Search";
import UserMenu from "./UserMenu";

const TopBar = () => {
	return (
		<div className="flex items-center justify-between px-4 py-3">
			<LogoNav />
			<Search />
			<UserMenu />
		</div>
	);
};

export default TopBar;
