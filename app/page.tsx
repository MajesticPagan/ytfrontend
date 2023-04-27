"use client";

import { videos } from "./constants";

import ClientOnly from "./components/ClientOnly";
import VideoItem from "./components/VideoItem";

const Home = () => {
	return (
		<ClientOnly>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 lg:px-8">
				{videos.map((video) => (
					<VideoItem key={video.title} {...video} />
				))}
			</div>
		</ClientOnly>
	);
};

export default Home;
