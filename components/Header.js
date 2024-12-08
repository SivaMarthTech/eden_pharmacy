// components/Header.js
import Image from 'next/image';
import logo from '../public/images/logo.png';

const Header = () => {
  return (
    <header className="bg-lightBlue p-4 flex justify-between items-center">
      <Image src={logo} alt="Elbrit Logo" width={100} height={50} />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-darkBlue">Home</a></li>
          <li><a href="#" className="text-darkBlue">Products</a></li>
          <li><a href="#" className="text-darkBlue">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
