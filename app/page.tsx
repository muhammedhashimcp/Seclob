import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import HomeServices from '@/components/HomeServices';
import MostUsedServices from '@/components/MostUsedServices';
import StoreComp from '@/components/StoreComp';
import UsefulServices from '@/components/UsefulServices';
import VehicleServices from '@/components/VehicleServices';
import WhySeclob from '@/components/WhySeclob';
import { Eats, storeData } from '@/constants';


export default function Home() {
  return (
		<main className="w-full flex min-h-screen  flex-col items-center justify-between relative top-0">
			<Hero />
			<VehicleServices />
			<HomeServices title="Home Services" />
			<MostUsedServices />
			<StoreComp title="Store" data={storeData}/>
			<StoreComp title="Eats" data={Eats}/>
			<HomeServices title="Job" />
			<WhySeclob  />
			<AboutUs  />
			<UsefulServices  />
		</main>
  );
}
