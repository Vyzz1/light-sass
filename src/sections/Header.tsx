import Logo from "@/assets/logosaas.png";
import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-center  gap-3 items-center py-3 bg-black text-white text-sm w-full ">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow with our tools
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>

          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className=" container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <MenuIcon className="size-5 md:hidden" />
            <nav className="hidden md:flex items-center gap-6 text-black/60 ">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Customers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium justify-center inline-flex items-center tracking-tight">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
