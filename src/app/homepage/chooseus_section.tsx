import Icon from "@/library/icon";
import { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

import RegisterdCompanyIcon from "@/assets/chooseus-icons/registered_company.svg";
import FastServiceIcon from "@/assets/chooseus-icons/fast_service.svg";
import GuarenteedWarrantyIcon from "@/assets/chooseus-icons/warranty.svg";
import SupportIcon from "@/assets/chooseus-icons/support.svg";
import AffordableIcon from "@/assets/chooseus-icons/affordable.svg";
import LikedIcon from "@/assets/chooseus-icons/liked.svg";

const IntroText = () => (
	<div className="flex flex-col items-center justify-center gap-4">
		<div className="flex flex-col text-center self-center text-wrap gap-2">
			<p className="text-gold text-md md:text-2xl">KENAPA PILIH KAMI?</p>
			<div className="font-orbitron text-lg md:text-3xl hidden md:flex md:flex-row gap-2">
				<p className="text-gold">SOLAHUDDIN</p>
				<p className="text-white">TECHNOLOGY</p>
				<p className="font-inter text-white">- PARTNER TEKNOLOGI ANDA</p>
			</div>
		</div>

		<div className="self-center text-center md:max-w-2xl text-wrap">
			<p className="text-text1">Kami bukan sekadar jual dan baiki. Kami sediakan solusi lengkap dengan servis terbaik.</p>
		</div>
	</div>
);

const WhyList = () => {
	const Why = ({ icon, title, description }: { icon: StaticImageData; title: string; description: string }) => (
		<Card className="w-full h-full p-5 flex flex-row gap-4 bg-background-five rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-gold hover:ring-gold transform-gpu select-none items-center">
			<div className="w-fit h-fit p-4 bg-gold items-center justify-center flex rounded-xl">
				<Icon src={icon} height={60} width={60} alt="service_icon" className="text-black" />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-white text-lg">{title}</p>
				<p className="text-text1 text-md">{description}</p>
			</div>
		</Card>
	);

	const Whys = [
		{ icon: RegisterdCompanyIcon, title: "Syarikat Berdaftar", description: "Berdaftar dengan Kementerian Kewangan Malaysia (TR0162410-D). Quotation & invoice rasmi untuk corporate client." },
		{ icon: FastServiceIcon, title: "Servis Pantas", description: "Kebanyakan repair siap dalam 1-3 hari. Urgent? WhatsApp kami untuk express service." },
		{ icon: GuarenteedWarrantyIcon, title: "Warranty Terjamin", description: "Semua produk & servis ada warranty. Peace of mind untuk setiap pembelian." },
		{ icon: SupportIcon, title: "Support 24/7", description: "Ada masalah? WhatsApp kami bila-bila masa. Kami sedia membantu." },
		{ icon: AffordableIcon, title: "Harga Berpatutan", description: "Harga kompetitif dengan kualiti terjamin. Special price untuk bulk order & corporate." },
		{ icon: LikedIcon, title: "Pelanggan Berpuas Hati", description: "500+ pelanggan happy dengan servis kami. Lihat testimoni sebenar." },
	];

	return (
		<div className="flex flex-col items-center px-4 md:px-40 md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
			{Whys.map((service, i) => (
				<div key={i}>
					<Why icon={service.icon} title={service.title} description={service.description} />
				</div>
			))}
		</div>
	);
};

export default function ChooseUsSection() {
	return (
		<div className="p-8 min-h-screen flex flex-col gap-10 justify-center w-full bg-background-one">
			<IntroText />
			<WhyList />
		</div>
	);
}
