import BranchMap from "@/components/maps/shop_location";

import HQLocation from "@/assets/hq location.png";
import BesutLocation from "@/assets/besut location.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ArrowLeftIcon from "@/assets/nav-icons/arrow-left.svg";
import WhatsappIcon from "@/assets/whatsapp.svg";
import Icon from "@/library/icon";

const IntroText = () => (
	<div className="flex flex-col items-center justify-center gap-4">
		<div className="flex flex-col text-center self-center md:text-4xl text-xl">
			<p className="text-black">LOKASI KAMI & HUBUNGI KAMI</p>
		</div>
		<div className="self-center text-center md:max-w-2xl text-wrap">
			<p className="text-text1">Lihat sendiri kedai kami di lokasi ini:</p>
		</div>
	</div>
);

export default function LocationSection() {
	const branches = [
		{
			id: 1,
			name: "Cawangan Gong Badak (HQ)",
			lat: 5.379606868463016,
			lng: 103.08257352883571,
			phone: 60179772616,
			picture: HQLocation,
			address: "9518, Kawasan Perindustrian, Gong Badak, 21300 Kuala Terengganu, Terengganu",
		},
		{
			id: 2,
			name: "Cawangan Besut",
			lat: 5.777040575493034,
			lng: 102.54798458634451,
			phone: 60179272616,
			picture: BesutLocation,
			address: "Lot 3762 Rumah Kedai 1 Tingkat, Perkedaian RAKR, 22200 Besut, Terengganu",
		},
	];

	return (
		<div className="p-8 min-h-screen flex flex-col items-center justify-center w-full bg-background-four">
			<IntroText />

			<div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10 md:p-8">
				{branches.map((branch) => (
					<div key={branch.id} className="border bg-white p-6 rounded-2xl shadow">
						<h3 className="font-semibold mb-3">{branch.name}</h3>

						<div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:gap-4">
							<div className="flex flex-row">
								<Image src={branch.picture} alt="Shop" className="rounded-lg" />
							</div>

							<BranchMap lat={branch.lat} lng={branch.lng} name={branch.name} />

							<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-10 md:col-span-2 items-center">
								<p className="text-justify text-sm w-[90%]">{branch.address}</p>
								<Button asChild variant={"default"} className="w-full cursor-pointer flex py-1 items-center rounded-full gap-4 md:gap-6 hover:scale-[1.05] active:scale-[1.05] transition-all bg-green-500">
									<a href={`https://wa.me/${branch.phone}`}>
										<Icon src={WhatsappIcon} width={20} height={20} alt="Whatsapp" className="text-white" />
										<p className=" text-sm font-semibold text-center text-white">WHATSAPP KAMI</p>
										<Icon src={ArrowLeftIcon} width={20} height={20} alt="LeftArrow" className="text-white" />
									</a>
								</Button>
							</div>
						</div>

						<a href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 text-center md:text-right w-full">
							Buka di Google Maps →
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
