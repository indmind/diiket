import "./Home.css";
import Hero from '../components/Hero/Hero';
import HowItWork from '../components/HowItWork/HowItWork';

export default function Home() {
  return <div className="Home">
    <Hero/>
    <HowItWork/>
  </div>;
}
