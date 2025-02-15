"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardFooter } from "../card";
import LoveButton from "../LoveButton";
import SadButton from "../SadButton";

import celebrate from "@/assets/celebrate.gif";
import kanna from "@/assets/kanna.jpg";
import first_image from "@/assets/anya_cry.gif";
import second_image from "@/assets/kanna_cry.gif";
import third_image from "@/assets/funny_cry_anya.gif";
import fourth_image from "@/assets/dandandan.gif";
import fifth_image from "@/assets/pretty_please.gif";
import sixth_image from "@/assets/k_on.gif";
import { Button } from "../ui/button";
import { Flip, Slide, toast, Zoom } from "react-toastify";
import { titleList } from "./list/title";

const MainCard = () => {
    const [image, setImage] = useState(kanna);
    const [count, setCount] = useState<number>(0);
    const [isYes, setIsYes] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [text, setText] = useState<string>(titleList[0]);
    const [index, setIndex] = useState<number>(0);

    const handleYesClick = () => {
        setIsYes(true);
    };

    const handleNoClick = () => {
        console.log("Count=============> ", count);
        setCount((count) => count + 1);
    };

    useEffect(() => {
        if (count === 1) {
            setImage(first_image);
            setText(titleList[count]);
        }
        if (count === 2) {
            setImage(second_image);
            setText(titleList[count]);
        }
        if (count === 3) {
            setImage(third_image);
            setText(titleList[count]);
        }
        if (count === 4) {
            setImage(fourth_image);
            setText(titleList[count]);
        }
        if (count === 5) {
            setImage(fifth_image);
            setText(titleList[count]);
        }
        if (count === 6) {
            setImage(sixth_image);
            setText(titleList[count]);
        }
        if (count > 6) {
            setCount(1);
            setText(titleList[1]);
        }
        if (isYes) {
            setImage(celebrate);
        }
    }, [count, isYes, isHidden]);

    return (
        <div>
            {!isYes ? (
                <Card className="flex flex-col gap-4">
                    <CardHeader className="p-0">
                        <CardTitle className="flex flex-col justify-center items-center gap-8">
                            <Image
                                src={image}
                                width={500}
                                height={250}
                                alt="Card Image"
                                className="rounded-tr-md rounded-tl-md w-[500px] h-[340px]"
                            />
                            <h2 className="text-xl">{text}</h2>
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex gap-10 justify-center items-center mt-4">
                        <LoveButton
                            title="Yes, please hehe"
                            handleClick={handleYesClick}
                        />
                        <SadButton title="No bruh, wtf" handleNoClick={handleNoClick} />
                    </CardFooter>
                </Card>
            ) : (
                <div>
                    <Button
                        className={`top-0 left-0 ${isHidden ? "hidden" : "absolute"}`}
                        onClick={() => {
                            toast("🦄 No sirrr, take this ponyy !", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Flip,
                            });
                        }}
                    >
                        Click me Click me click
                    </Button>
                    <Button
                        className={`top-56 right-44 size-48 ${
                            isHidden ? "hidden" : "absolute"
                        } `}
                        onClick={() => {
                            toast.error("Haina re hainaaa aluuuuu 🤣", {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }}
                    >
                        Oooo muchu lal click meeeeee
                    </Button>
                    <Card className="flex flex-col gap-4">
                        <CardHeader className="p-0">
                            <Link href={`/playlist`} className="w-full">
                                <Button
                                    className={`w-full ${
                                        isHidden ? "hidden" : "relative"
                                    }`}
                                    onClick={() => {
                                        toast.success(
                                            "See, I don't lie when I swear 😉",
                                            {
                                                position: "top-right",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                            }
                                        );
                                    }}
                                >
                                    Click me Im the one i swear
                                </Button>
                            </Link>
                            <CardTitle className="flex flex-col justify-center items-center gap-8">
                                <Image
                                    src={image}
                                    width={500}
                                    height={250}
                                    alt="Card Image"
                                    className="rounded-tr-md rounded-tl-md w-[500px] h-[340px]"
                                />
                                <h2 className="text-lg text-pretty text-secondary opacity-60">
                                    <p>
                                        I shall take your hands,{" "}
                                        <span className="text-2xl">even</span> they are
                                        <span className="text-2xl"> cold af</span>
                                    </p>{" "}
                                    <span>
                                        {" "}
                                        and you shall do the{" "}
                                        <span className="text-2xl">sameeeee</span>
                                    </span>
                                </h2>
                            </CardTitle>
                        </CardHeader>
                        <CardFooter className="flex gap-10 justify-center items-center mt-4">
                            <Button
                                onClick={() => {
                                    setIsHidden(false);
                                    toast("haha re haha, vetauna sakxa vaye vetaauuu 🫣", {
                                        position: "top-center",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: false,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        transition: Zoom,
                                    });
                                }}
                            >
                                This might take you somewhere
                            </Button>
                        </CardFooter>
                        <Button
                            onClick={() => {
                                toast.info("shyet maybe it's the biggest one?? 🤔", {
                                    position: "top-left",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Slide,
                                });
                            }}
                        >{`This might take you somewhere (maybe this one?)`}</Button>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default MainCard;
