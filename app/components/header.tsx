import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6 bg-white">
      <Image src="/Logo.svg" alt="Aparatus" width={100} height={26.6} />
    </header>
  );
};

export default Header();
