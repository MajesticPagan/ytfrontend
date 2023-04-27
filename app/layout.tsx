import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";

import "./globals.css";

export const metadata = {
	title: "Ytfrontend",
	description: "App created for replicating the Youtube UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-zinc-900 text-zinc-200">
				<div className="flex flex-col h-screen">
					<TopBar />
					<div className="flex flex-1 h-full overflow-hidden">
						<SideBar />
						<div className="flex-1 overflow-y-auto">{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
