import CornerFrame from '@/components/cornerFrame/CornerFrame';
import HomeLayout from './(public)/layout';
import Divider from '@/components/layouts/Public/Divider';
import Hero from '@/components/publicUi/Hero';
import CasinoMenu from '@/components/publicUi/CasinoMenu';
import LiveCasinoMenu from '@/components/publicUi/LiveCasinoMenu';

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<CasinoMenu />
			<LiveCasinoMenu />
		</HomeLayout>
	);
}
