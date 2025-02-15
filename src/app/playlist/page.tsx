import PlaylistCard from "@/components/playlist/PlaylistCard";
import Link from "next/link";
import React from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { playlist } from "@/components/playlist/list/playlist";
import { Button } from "@/components/ui/button";

const page = () => {
    return (
        <div className="flex flex-col gap-4 mx-auto p-4 justify-center items-center">
            <h2 className="text-2xl">Playlist for my kalsuuuu 🥰💝</h2>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link
                            href={`https://www.youtube.com/playlist?list=PLqAlkKEKiKiyfMYYC_LZNeL4rzS52_vLX`}
                            target="_blank"
                        >
                            <Button>{`Go to playlist (this is real i swear lmao)`}</Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Click on this at the endddddddd</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {playlist.map((song, index) => (
                <PlaylistCard
                    key={index}
                    title={song.title}
                    image={song.image}
                    link={song.link}
                />
            ))}
        </div>
    );
};

export default page;
