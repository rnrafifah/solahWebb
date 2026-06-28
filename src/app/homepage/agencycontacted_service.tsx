import Image from "next/image";

import KlinikAhlan from "@/assets/agency/ahlan.png"
import Gov from "@/assets/agency/gov.png"
import IKM from "@/assets/agency/ikm.png"
import Insaff from "@/assets/agency/insaff.png"
import JKM from "@/assets/agency/jkm.png"
import KKM from "@/assets/agency/kkm.png"
import VSG from "@/assets/agency/vsg.png"
import UMT from "@/assets/agency/umt.png"
import PFT from "@/assets/agency/pft.png"

const IntroText = () => (
	<>
		<div className="flex flex-col text-center self-center md:text-4xl text-xl">
			<p className="text-black">DIPERCAYAI OLEH BANYAK AGENSI</p>
		</div>
	</>
);

const AgencyList = () => {
	const images = [KlinikAhlan, Gov, IKM, Insaff, JKM, KKM, VSG, UMT, PFT];
    const loopImages = [...images, ...images]

	return (
		<div className="w-full overflow-hidden py-4">
			<div className="flex w-max animate-scroll gap-10 items-center justify-center">
				{loopImages.map((src, idx) => (
					<Image key={idx} src={src} alt={`img-${idx}`} className="h-40 w-fit object-cover rounded-xl shrink-0" />
				))}
			</div>
		</div>
	);
};

export default function AgencyContactedSection() {
	return (
		<div className="p-8 min-h-screen flex flex-col gap-10 justify-center w-full bg-background-three">
			<IntroText />
			<AgencyList />
		</div>
	);
}
