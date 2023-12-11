import Nav from "./Nav";
import Button from "./Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center py-12 md:py-6 px-4">
        <div className="w-3/12 text-right lg:text-center md:text-center uppercase text-2xl font-semibold tracking-widest text-white">
          <a href="#home">JF.CO</a>
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav />
        </div>
        <div className="w-3/12 text-right lg:text-center md:pr-10 hidden md:block">
          <Button href="#contact" variant="outline-yellow">
            Contact Us
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <Image
            id="burger-menu"
            src="/menu.svg"
            alt="burger menu"
            className="inline-block"
            width="24"
            height="24"
          />
        </div>
      </div>

      {/* <div className='fixed bg-white right-0 top-0 h-full w-full'>
        <Nav />
      </div> */}
    </>
  );
}
