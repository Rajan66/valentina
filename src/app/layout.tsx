import type { Metadata } from "next";
import { Courgette } from "next/font/google";

import { ToastContainer } from "react-toastify";

import "./globals.css";

const courgette = Courgette({
    variable: "--font-courgette",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Oo Muchuuuu",
    description: "Will you be my valentina, poookie bear? :0",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${courgette.variable} antialiased`}>
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
