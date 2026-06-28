import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
	subsets: ["latin"],
	weight: ["600"],
	variable: "--font-inter",
});
const orbitron = Orbitron({
	subsets: ["latin"],
	weight: ["600"],
	variable: "--font-orbitron",
}); 

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={`overflow-y-auto no-scrollbar ${inter.variable} ${orbitron.variable}`}>
            <Analytics />
            <SpeedInsights />
			<body>{children}</body>
		</html>
	);
}
