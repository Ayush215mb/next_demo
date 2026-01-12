import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-Schibsted_Grotesk",
  subsets: ["latin"],
});

const martian_Mono = Martian_Mono({
  variable: "--font-Martian_Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for every dev event you musn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted_Grotesk.variable} ${martian_Mono.variable} min-h-screen antialiased`}
      >
<div className={ "absolute inset-0 top-0 z-[-1]  min-h-screen" }>
    <LightRays
        raysOrigin="top-center-offset"
        raysColor="#5dfeca"
        raysSpeed={0.9}
        lightSpread={2.5}
        rayLength={2.0}
        followMouse={true}
        mouseInfluence={0.03}
        noiseAmount={0.0}
        distortion={0.01}
    />
</div>
<Navbar/>
<main>

    {children}
</main>


      </body>
    </html>
  );
}
