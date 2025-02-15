"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

type SadButtonProps = {
    title: string;
    handleNoClick: () => void;
};

export default function SadButton({ title, handleNoClick }: SadButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [cryingFaces, setCryingFaces] = useState<
        { id: string; broken: boolean; top: number; left: number }[]
    >([]);
    const [buttonPosition, setButtonPosition] = useState<{ top: string; left: string }>({
        top: "50%",
        left: "50%",
    });

    const handleHoverStart = () => {
        setIsHovered(true);
        const newFaces = Array.from({ length: 10 }, (_, index) => ({
            id: `${Date.now()}-${Math.random()}-${index}`,
            broken: false,
            top: Math.random() * 40 + 10,
            left: Math.random() * 70 + 15,
        }));
        setCryingFaces(newFaces);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        setCryingFaces((prev) => prev.map((face) => ({ ...face, broken: true })));

        setTimeout(() => setCryingFaces([]), 500);
    };

    const handleClick = () => {
        setIsClicked(true);
        const randomTop = Math.random() * 100 + "%";
        const randomLeft = Math.random() * 100 + "%";
        setButtonPosition({ top: randomTop, left: randomLeft });
        handleNoClick();
    };

    return (
        <div
            className={`flex justify-center items-center ${
                isClicked ? "absolute" : "relative"
            }`}
            style={{
                top: isClicked ? buttonPosition.top : "auto",
                left: isClicked ? buttonPosition.left : "auto",
                zIndex: 100,
            }}
        >
            {/* Button */}
            <Button
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                onClick={handleClick}
                className="relative rounded-lg shadow-lg transition-all duration-300 overflow-hidden text-base"
            >
                <span className="relative z-10">{title} 😢</span>

                {/* Crying faces floating */}
                <AnimatePresence>
                    {cryingFaces.map((face) => (
                        <motion.div
                            key={face.id}
                            className="absolute text-blue-500 text-xl"
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                                y: 0,
                                x: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: `${Math.random() * 150 - 50}%`,
                                x: `${Math.random() * 150 - 50}%`,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.5,
                                y: `${Math.random() * 150 - 50}%`,
                                x: `${Math.random() * 150 - 50}%`,
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            style={{
                                top: `${face.top}%`,
                                left: `${face.left}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            😭
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Button>
        </div>
    );
}
