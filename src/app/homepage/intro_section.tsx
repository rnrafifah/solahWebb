const IntroText = () => (
	<>
		<div className="flex flex-col text-center self-center md:text-6xl text-2xl">
			<p className="text-white">BUKAN SEKADAR MEMBAIKI </p>
			<p className="text-gold">KAMI BERI SOLUSI!</p>
		</div>

		<div className="self-center text-center md:max-w-2xl px-8">
			<p className="text-text1">Laptop, PC, Custom Build, CCTV & Repair Service — dari setup kecil hingga projek berskala besar, semuanya kami boleh uruskan.</p>
		</div>
	</>
);

const StatisticsText = () => (
	<div className="flex flex-col md:flex-row justify-center items-center gap-12.5">
		<div className="flex flex-col items-center">
			<p className="text-gold text-lg font-semibold text-center">500+</p>
			<p className="text-text1 text-md font-medium text-center">Pelanggan Berpuas Hati</p>
		</div>
		<div className="flex flex-col items-center">
			<p className="text-gold text-lg font-semibold text-center">1000+</p>
			<p className="text-text1 text-md font-medium text-center">Peranti Dibaiki</p>
		</div>
		<div className="flex flex-col items-center">
			<p className="text-gold text-lg font-semibold text-center">5+</p>
			<p className="text-text1 text-md font-medium text-center">Tahun Pengalaman</p>
		</div>
		<div className="flex flex-col items-center">
			<p className="text-gold text-lg font-semibold text-center">24&#x2F;7</p>
			<p className="text-text1 text-md font-medium">Sokongan Whatsapp</p>
		</div>
	</div>
);

export default function IntroSection() {
	return (
		<div className="p-8 min-h-screen flex flex-col gap-10 justify-center w-full bg-background-one">
			<IntroText />
			<StatisticsText />
		</div>
	);
}
