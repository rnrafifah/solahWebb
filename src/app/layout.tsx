import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
