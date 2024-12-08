// components/Hero.js
import Image from 'next/image';
import probiotics from '../public/images/probiotics.png';

const Hero = () => {
  return (
    <section className="text-center my-8 bg-lightBlue p-8">
      <h1 className="text-4xl font-bold text-darkBlue">Essential Vitamins</h1>
      <p className="text-lg text-gray-700">Online Medical Supplies</p>
      <p className="text-lg text-gray-700">Get Your Vitamins & Minerals</p>
      <button className="mt-4 p-2 bg-darkBlue text-white rounded">Explore</button>
      <div className="flex flex-col md:flex-row items-center mt-8">
        <Image src={probiotics} alt="Probiotics" width={300} height={300} />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold">Probiotics</h2>
          <p className="text-gray-700">Boosts Digestive Health</p>
          <ul className="list-disc ml-4 mt-2">
            <li className="text-gray-700">Vegan Friendly</li>
            <li className="text-gray-700">Sustainably Sourced</li>
            <li className="text-gray-700">High Quality</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
