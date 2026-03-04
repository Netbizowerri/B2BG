import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Events from '../components/Events';
import Donation from '../components/Donation';
import SeoMeta from '../components/SeoMeta';

export default function Home() {
  return (
    <>
      <SeoMeta
        title="Home | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Blessed2Bless Global Empowerment Organisation supports communities across Nigeria through education, health outreach, climate action, and economic empowerment programs."
        path="/"
        image="https://i.ibb.co/xSn1R5Yy/B2BG.png"
      />
      <Hero />
      <div className="bg-white">
        <About showLearnMore />
      </div>
      <Programs limit={3} />
      <Events limit={3} />
      <Donation showVolunteer={false} />
    </>
  );
}
