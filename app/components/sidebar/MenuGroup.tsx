"use client";

import { MenuItemProps } from "@/app/constants";

import MenuItem from "./MenuItem";

interface MenuGroupProps {
	items: MenuItemProps[];
	title?: string;
}

const MenuGroup: React.FC<MenuGroupProps> = ({ items, title }) => {
	return (
		<div>
			{title && <div className="text-lg px-4">{title}</div>}
			{items.map((item) => (
				<MenuItem key={item.label} {...item} />
			))}
		</div>
	);
};

export default MenuGroup;
