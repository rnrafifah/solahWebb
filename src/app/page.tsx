"use client";

import NavigationBar from "@/components/navbar";
import IntroSection from "./homepage/intro_section";
import ServiceSection from "./homepage/service_section";
import ChooseUsSection from "./homepage/chooseus_section";
import { ArrowBigDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AgencyContactedSection from "./homepage/agencycontacted_service";
import LocationSection from "./homepage/location_section";

export default function Home() {
	const endRef = useRef<HTMLDivElement | null>(null);
	const [isLastVisible, setIsLastVisible] = useState(false);

	useEffect(() => {
		const EndSectionRef = endRef;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsLastVisible(entry.isIntersecting);
			},
			{
				threshold: 0.6,
			},
		);

		if (EndSectionRef.current) {
			observer.observe(EndSectionRef.current);
		}

		return () => {
			if (EndSectionRef.current) {
				observer.unobserve(EndSectionRef.current);
			}
		};
	}, []);

	return (
		<>
			<NavigationBar />
			<main className="bg-white h-full w-full">
				<div className="h-full w-full flex flex-col">
					<section id="home" className="scroll-mt-15">
						<IntroSection />
					</section>

					<section id="services" className="scroll-mt-15">
						<ServiceSection />
					</section>

					<section id="chooseus" className="scroll-mt-15">
						<ChooseUsSection />
					</section>

					<section className="scroll-mt-15">
						<AgencyContactedSection />
					</section>

					<section ref={endRef} id="contact" className="scroll-mt-15">
						<LocationSection />
					</section>
				</div>

				<div className="fixed bottom-10 right-10">
					<ArrowBigDown color="white" className={`animate-bounce transition-all duration-300 ${isLastVisible ? "opacity-0" : "opacity-100"}`} />
				</div>
			</main>
		</>
	);
}
