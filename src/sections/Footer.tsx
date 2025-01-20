import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinked from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center ">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:size-full before:top-2 before:bottom-0 before:blur before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)]">
          <Image src={logo} height={40} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col lg:flex-row gap-6 mt-6 justify-center ">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 w-full">
          <SocialX />
          <SocialInsta />
          <SocialLinked />
          <SocialYoutube />
          <SocialPin />
        </div>
        <p className="mt-6 ">
          &copy; 2021 All rights reserved. <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};
