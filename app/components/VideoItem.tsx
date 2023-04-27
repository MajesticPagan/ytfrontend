"use client";

import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

import { VideoProps } from "../constants";

const VideoItem: React.FC<VideoProps> = ({
	thumbnailUrl,
	channelImageUrl,
	channelName,
	title,
	viewCount,
	createdAt,
}) => {
	return (
		<article className="flex flex-col gap-3 cursor-pointer group">
			<div className="overflow-hidden rounded-xl">
				<Image
					src={thumbnailUrl}
					alt="Thumbnail"
					width={400}
					height={200}
					className="w-full"
				/>
			</div>
			<header className="flex gap-3">
				<div>
					<Image
						src={channelImageUrl}
						alt="Thumbnail"
						width={36}
						height={36}
						className="rounded-full"
					/>
				</div>
				<div className="flex flex-col flex-1 gap-2 overflow-hidden">
					<div className="flex justify-between">
						<span className="font-semibold text-white max-w-[80%]">{title}</span>
						<BsThreeDotsVertical size={18} className="mt-1 hover:text-white hidden group-hover:block" />
					</div>
					<div className="text-sm text-zinc-400">
						<div className="hover:text-white">{channelName}</div>
						<div>{`${viewCount} visualizações • ${createdAt.toLocaleDateString()}`}</div>
					</div>
				</div>
			</header>
		</article>
	);
};

export default VideoItem;
