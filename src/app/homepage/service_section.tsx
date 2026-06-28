import Icon from "@/library/icon";

import PCSellingIcon from "@/assets/services-icons/laptop_pc_selling.svg";
import { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

const IntroText = () => (
	<div className="flex flex-col items-center justify-center gap-5">
		<div className="flex flex-col text-center self-center text-wrap">
			<p className="text-gold text-md md:text-2xl">PERKHIDMATAN KAMI</p>
			<p className="hiddden md:block text-white text-lg md:text-3xl">SOLUSI TEKNOLOGI LENGKAP UNTUK ANDA</p>
		</div>

		<div className="self-center text-center md:max-w-2xl text-wrap">
			<p className="text-text1">Dari laptop baru hingga repair, custom PC hingga CCTV — kami sediakan semua yang anda perlukan.</p>
		</div>
	</div>
);

const ServiceList = () => {
	const Service = ({ icon, title, description }: { icon: StaticImageData; title: string; description: string }) => (
		<Card className="w-full h-full p-5 flex flex-col gap-4 bg-background-five rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-gold hover:ring-gold transform-gpu select-none">
			<div className="w-fit h-fit p-4 bg-darker-gold items-center justify-center flex rounded-xl">
				<Icon src={icon} height={30} width={30} alt="service_icon" className="text-gold" />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-white text-lg">{title}</p>
				<p className="text-text1 text-md">{description}</p>
			</div>
		</Card>
	);

	const Services = [
		{ icon: PCSellingIcon, title: "Jualan Laptop & PC", description: "New & Refurbished laptop dengan harga berpatutan. Semua brand tersedia." },
		{ icon: PCSellingIcon, title: "Repair Laptop & PC", description: "Semua masalah laptop & komputer — kami boleh baiki. Fast & reliable." },
		{ icon: PCSellingIcon, title: "Custom PC", description: "Bina PC gaming atau workstation mengikut bajet dan keperluan anda." },
		{ icon: PCSellingIcon, title: "CCTV Setup", description: "Pasang sistem CCTV untuk rumah atau pejabat. Full setup & monitoring." },
		{ icon: PCSellingIcon, title: "Upgrade SSD/RAM", description: "Tingkatkan prestasi laptop anda dengan upgrade SSD dan RAM." },
		{ icon: PCSellingIcon, title: "Monitor & Display", description: "Pelbagai pilihan monitor untuk gaming, kerja atau productivity." },
	];

	return (
		<div className="flex flex-col items-center px-4 md:px-40 md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
			{Services.map((service, i) => (
				<div key={i}>
					<Service icon={service.icon} title={service.title} description={service.description} />
				</div>
			))}
		</div>
	);
};

export default function ServiceSection() {
	return (
		<div className="p-8 min-h-screen flex flex-col gap-10 justify-center w-full bg-background-two">
			<IntroText />
			<ServiceList />
		</div>
	);
}
