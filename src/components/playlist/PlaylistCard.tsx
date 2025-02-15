import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

import { Card, CardHeader, CardTitle } from "../card";

type PlaylistCardProps = {
    title: string;
    link: string;
    image: StaticImageData;
};

const PlaylistCard = ({ title, link, image }: PlaylistCardProps) => {
    return (
        <Card>
            <CardHeader className="p-0">
                <Link href={link} target="_blank">
                    <CardTitle className="flex flex-col justify-center items-center gap-2 ">
                        <Image
                            src={image}
                            width={500}
                            height={300}
                            alt="Card Image"
                            className="w-[500px] h-[300px]"
                        />
                        <h2 className="p-4">{title}</h2>
                    </CardTitle>
                </Link>
            </CardHeader>
        </Card>
    );
};

export default PlaylistCard;
