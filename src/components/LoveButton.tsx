"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

type LoveButtonProps = {
    title: string;
    handleClick: () => void;
};
export default function LoveButton({ title, handleClick }: LoveButtonProps) {
    const [hearts, setHearts] = useState<
        { id: string; broken: boolean; top: number; left: number }[]
    >([]);

    const handleHoverStart = () => {
        const newHearts = Array.from({ length: 10 }, (_, index) => ({
            id: `${Date.now()}-${Math.random()}-${index}`,
            broken: false,
            top: Math.random() * 40 + 10,
            left: Math.random() * 70 + 15,
        }));
        setHearts(newHearts);
    };

    const handleHoverEnd = () => {
        setHearts((prev) => prev.map((heart) => ({ ...heart, broken: true })));

        setTimeout(() => setHearts([]), 500);
    };

    return (
        <div className="relative flex justify-center items-center">
            {/* Button */}
            <Button
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                onClick={handleClick}
                className="relative rounded-lg shadow-lg transition-all duration-300 overflow-hidden text-base"
            >
                <span className="relative z-10">{title} 💖</span>

                <AnimatePresence>
                    {hearts.map((heart) => (
                        <motion.div
                            key={heart.id}
                            className="absolute text-red-500 text-xl"
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
                                top: `${heart.top}%`,
                                left: `${heart.left}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {heart.broken ? "💔" : "❤️"}{" "}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Button>
        </div>
    );
}
