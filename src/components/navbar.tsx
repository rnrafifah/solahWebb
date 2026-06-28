"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import CompanyLogo from "@/assets/LOGO COMPANY.svg";
import ContactIcon from "@/assets/nav-icons/contact.svg";
import HomeIcon from "@/assets/nav-icons/home.svg";
import Icon from "@/library/icon";

import { Button } from "@/components/ui/button";

const SECTION_TO_NAV = [
	{ id: "home", nav: "home" },
	{ id: "services", nav: "services" },
	{ id: "chooseus", nav: "chooseus" },
	{ id: "contact", nav: "contact" },
];

export default function NavigationBar() {
	const router = useRouter();

	const [menuOpen, setMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState("home");

	const navItems = [
		{ path: "home", icon: HomeIcon, alt: "home", label: "LAMAN UTAMA" },
		{ path: "services", icon: ContactIcon, alt: "services", label: "SERVIS KAMI" },
		{ path: "chooseus", icon: ContactIcon, alt: "chooseus", label: "KENAPA PILIH KAMI?" },
		{ path: "contact", icon: ContactIcon, alt: "contact", label: "HUBUNGI KAMI" },
	];

	const handleNavigation = (path: string) => {
		// route page
		if (path === "/mall") {
			router.push("/mall");
			setActiveNav("/mall");
			setMenuOpen(false);
			return;
		}

		// scroll sections
		const el = document.getElementById(path);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}

		setMenuOpen(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visibleEntries.length === 0) return;

				const top = visibleEntries[0];
				setActiveNav(top.target.id);
			},
			{
				threshold: [0.1, 0.25, 0.5, 0.75],
				rootMargin: "-80px 0px -40% 0px",
			},
		);
		SECTION_TO_NAV.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setMenuOpen(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const getNavStyle = (path: string) => (activeNav === path ? "text-gold" : "text-white");

	return (
		<>
			{/* NAVBAR */}
			<div className="fixed top-0 h-16 w-full py-8 flex items-center z-50">
				<div className="absolute w-full h-full bg-background-one/50 backdrop-blur-md" />

				<div className="flex flex-row px-7.5 py-1.5 gap-2.5 z-10 w-full items-center">
					{/* LOGO */}
					<div className="flex flex-1">
						<div onClick={() => handleNavigation("home")} className="cursor-pointer flex items-center gap-2.5 font-orbitron font-semibold">
							<Image src={CompanyLogo} alt="logo" width={40} height={40} />
							<p className="text-white">SOLAHUDDIN</p>
							<p className="text-gold">TECHNOLOGY</p>
						</div>
					</div>

					{/* DESKTOP NAV */}
					<nav className="hidden md:block">
						<ul className="flex gap-7.5">
							{navItems.map(({ path, icon, alt, label }) => (
								<li key={path} onClick={() => handleNavigation(path)} className={`cursor-pointer flex items-center gap-2.5 ${getNavStyle(path)}`}>
									<Icon src={icon} alt={alt} width={20} height={20} />
									<p className="font-semibold text-sm">{label}</p>
								</li>
							))}
						</ul>
					</nav>

					{/* BURGER */}
					<Button className="md:hidden flex flex-col gap-1 w-fit h-fit" onClick={() => setMenuOpen((p) => !p)}>
						<span className={`w-6 h-0.5 bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
						<span className={`w-6 h-0.5 bg-white ${menuOpen ? "opacity-0" : ""}`} />
						<span className={`w-6 h-0.5 bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
					</Button>
				</div>
			</div>

			{/* MOBILE MENU */}
			<div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
				<div className="absolute inset-0 bg-background-one" onClick={() => setMenuOpen(false)} />

				<div className="relative z-10 mt-20 px-7 flex flex-col gap-6">
					{navItems.map(({ path, icon, alt, label }) => (
						<Button key={path} onClick={() => handleNavigation(path)} className={`flex items-center justify-center gap-3 ${getNavStyle(path)}`}>
							<Icon src={icon} alt={alt} width={20} height={20} />
							{label}
						</Button>
					))}
				</div>
			</div>
		</>
	);
}
