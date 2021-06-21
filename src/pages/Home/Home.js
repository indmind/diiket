import "./Home.css";
import Hero from '../../components/Hero/Hero';
import HowItWork from '../../components/HowItWork/HowItWork';
import RandomUser from '../../components/RandomUser/RandomUser';

export default function Home() {
  return <div className="Home">
    <Hero/>
    <HowItWork/>
    <RandomUser/>
  </div>;
}
