import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Events from '../components/Events';
import Donation from '../components/Donation';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white">
        <About />
      </div>
      <Programs limit={3} />
      <Events limit={3} />
      <Donation showVolunteer={false} />
    </>
  );
}

